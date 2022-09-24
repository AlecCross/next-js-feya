import { useRouter } from "next/router"
import categoriesData from "../data/categoriesData"
import React from "react"
import Router from "next/router"

export default function Caterory() {
    const router = useRouter()
    // console.log(router)
    // console.log(categoriesData.categories[router.query.caterory])
    // console.log(window.location.href.split('/').pop())
    // console.log("context: ", context)
    // const categoryValue = categoriesData.categories[router.query.caterory]
    // const categoryValue = categoriesData.categories[window.location.href.split('/').pop()]
    return <>
        <button onClick={() => Router.push('/')}>{"< На Головну"}</button>
        <div>{router.query.caterory}</div>
        {/* <div>{categoryValue.name}</div>
        <img src={categoryValue.imageUrl} /> */}
    </>
}
