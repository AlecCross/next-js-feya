import React from 'react'
import PageContainer from '../../components/PageContainer'
import db from "../../db.json"
import { gql } from "@apollo/client"
import client from "../../apollo-client"
import gridStyle from "../../css.module/grid.module.css"
import Link from "next/link"

export default function Subcategory(props) {
    return <>
        <PageContainer header={props.subCategoryData.subCategory.name}>
            <ul className={gridStyle.container}>
                {Object.values(props.apolloData.categoryProducts).map(
                    product =>
                        <li className={gridStyle.element} key={product.id}>
                            <Link href={`/${props.subCategoryData.category.id}/${props.subCategoryData.subCategory.subcategoryId}/${product.id}`} >
                                <a>
                                    <img className={gridStyle.element__img}
                                        src={`${product.images[0]}`}
                                        alt={`${product.name}`}
                                    />
                                    <div className={gridStyle.element__name}>{product.name}</div>
                                </a>
                            </Link>
                        </li>
                )}
            </ul>
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
    let test2
    db.items.forEach(item => {
        if (item.id === props.params.id)
            item.subcategories.forEach(subCat => {
                if (subCat.subcategoryId === props.params.subcategoryId) test2 = { category: item, subCategory: subCat }
            })
    })

    const { data } = await client.query({
        query: gql`
        query MyQuery($categoryName: [String]!) {
            categoryProducts(categoryName: $categoryName) {
                id
                name
                images
            }
        }
        `, variables: { categoryName: test2.subCategory.name }
    })

    return {
        props: {
            apolloData: data,
            subCategoryData: test2
        }
    }
}
