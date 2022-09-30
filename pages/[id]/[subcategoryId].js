import React from 'react'
import PageContainer from '../../components/PageContainer'
import db from "../../db.json"

export default function Subcategory({ subCategory }) {
    return <>
        <PageContainer header={"[subcategoryId]"}>
            {/* <div>{subCategory}</div> */}
        </PageContainer>
    </>
}

// export const getStaticPaths = async () => {
//     const allSubcategories = db.items.map(
//         category => category.subcategories.map(
//             subcategory => subcategory.subcategoryId)).reduce(
//                 function (pre, cur) { return pre.concat(cur) }
//             )
//     const paths = allSubcategories.map(subCat => {
//         return {
//             params: { subcategoryId: subCat }
//         }
//     })
//     console.log(paths)

//     return {
//         paths,
//         fallback: false //Чтоб при неверном url отобразить 404
//     }
// }

// export const getStaticProps = async (context) => {
//     let findId2 = {}
//     db.items.forEach(item => { if (item.id === context.params.id) findId2 = item })
//     return {
//         props: {
//             category: findId2
//         }
//     }
// }


