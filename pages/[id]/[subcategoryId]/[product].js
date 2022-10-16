import React from 'react'
import db from "../../../db.json"
import { gql } from "@apollo/client"
import client from "../../../apollo-client"

export default function Product() {
    return (
        <div>Product</div>)
}

// export const getStaticPaths = async () => {
//     const allSubcategories = db.items.map(
//         category => category.subcategories.map(
//             subcategory => [category.id, subcategory])).reduce(
//                 function (pre, cur) { return pre.concat(cur) }
//             )

//     // console.log(allSubcategories)
//     allSubcategories.map(sub => {
//         console.log(sub[1].name)
//         const { data } = client.query({
//             query: gql`
//             query MyQuery {
//                 categoryProducts(categoryName: "anfen") {
//                     id
//                     name
//                     images
//                 }
//             }
//             `, 
//             variables: { categoryName: sub[1].name }
//         })
//         // console.log(data)
//     })

//     const paths = allSubcategories.map(subCat => {
//         return {
//             params: { id: subCat[0], subcategoryId: subCat[1].subcategoryId, product: "392" }
//         }
//     })

//     return {
//         paths,
//         fallback: false //Чтоб при неверном url отобразить 404
//     }
// }

// export const getStaticProps = async (props) => {
//     return {
//         props: {

//         }
//     }
// }
