import React from "react"
import Category from "../components/Category"
import db from "../db.json"
import PageContainer from "../components/PageContainer"

export default function Details({ category }) {
    return <>
        <PageContainer header={category.name}>
            <Category seo={category.name} category={category} />
        </PageContainer>
    </>
}

export const getStaticPaths = async () => {
    const paths = db.items.map(category => {
        return {
            params: { id: category.id.toString() }
        }
    })
    console.log(paths)
    return {
        paths,
        fallback: false //Чтоб при неверном url отобразить 404
    }
    
}

export const getStaticProps = async (context) => {
    let findId2 = {}
    db.items.forEach(item => { if (item.id === context.params.id) findId2 = item })
    return {
        props: {
            category: findId2
        }
    }
}
