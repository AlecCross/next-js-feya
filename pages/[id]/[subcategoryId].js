import React from 'react'
import PageContainer from '../../components/PageContainer'
import db from "../../db.json"
import { gql } from "@apollo/client";
import client from "../../apollo-client";

export default function Subcategory(props) {
    console.log(props.apolloData)
    return <>
        <PageContainer header={props.subCategory.name}>
            <img
                src={`${props.subCategory.imageUrl}`}
                alt={`${props.subCategory.name}`}
            />
            {Object.values(props.apolloData.categoryProducts).map(
                product => <div key={product.id}>{product.name}</div>)}
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
    db.items.forEach(item => {
        if (item.id === props.params.id)
            item.subcategories.forEach(subCat => {
                if (subCat.subcategoryId === props.params.subcategoryId) test2 = subCat
            })
    })
    const { data } = await client.query({
        query: gql`
        query MyQuery($categoryName: [String]!) {
            categoryProducts(categoryName: $categoryName) {
                id
                name
            }
        }
        `, variables: { categoryName: test2.name }
    })

    console.log(data)
    return {
        props: {
            apolloData: data,
            subCategory: test2
        }
    }
}
