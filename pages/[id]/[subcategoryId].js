import React from 'react'
import PageContainer from '../../components/PageContainer'
import db from "../../db.json"

export default function Subcategory(props) {
    return <>
        <PageContainer header={props.subCategory.name}>
            <img
                src={`${props.subCategory.imageUrl}`}
                alt={`${props.subCategory.name}`}
            />
        </PageContainer>
    </>
}

export const getStaticPaths = async () => {
    const allSubcategories = db.items.map(
        category => category.subcategories.map(
            subcategory => [category.id, subcategory.subcategoryId])).reduce(
                function (pre, cur) { return pre.concat(cur) }
            )
    const paths = allSubcategories.map(subCat => {
        return {
            params: { id: subCat[0], subcategoryId: subCat[1] }
        }
    })

    return {
        paths,
        fallback: false //Чтоб при неверном url отобразить 404
    }
}

export const getStaticProps = async (props) => {
    let test2 = {}
    db.items.forEach(item => { if (item.id === props.params.id) item.subcategories.forEach(subCat => { if (subCat.subcategoryId === props.params.subcategoryId) test2 = subCat }) })
    return {
        props: {
            subCategory: test2
        }
    }
}
