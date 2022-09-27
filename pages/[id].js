import { useRouter } from "next/router"
import React from "react"
import Router from "next/router"
import db from "../db.json"

export default function Details({ category }) {
    const router = useRouter()
    return <>
        <button onClick={() => Router.push('/')}>{"< На Головну"}</button>
        <div>{router.query.category}</div>
        <div>{category.name}</div>
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr)",
            gridAutoRows: "330px",
        }}>
            {category.subcategories.map(subcategory => <div key={subcategory.name}>
                <img
                    src={`${subcategory.imageUrl}`}
                    alt={`${subcategory.name}`}
                    width="300px"
                    height="300px"
                />
                <div style={{ textAlign: "center" }}>{subcategory.name}</div>
            </div>
            )}
        </div>
    </>
}

export const getStaticPaths = async () => {

    const paths = db.items.map(category => {
        return {
            params: { id: category.id }
        }
    })

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
