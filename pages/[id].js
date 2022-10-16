import React from "react"
import Category from "../components/Category"
import db from "../db.json"

export default function Details({ category }) {
    console.log(category)
    return <>
            <Category seo={category.name} category={category} />
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
