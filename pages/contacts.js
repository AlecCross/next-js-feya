import React from "react"
import Router from "next/router"

export default function Index() {
    return <>
        <h1>Контактна інформація</h1>
        <button onClick={() => Router.push('/')}>{"< На Головну"}</button>
    </>
}
