import Head from "next/head";
import React from "react"
import Router from "next/router"

export default function ErrorPage() {
    return <>
        <Head>
            <title>Фея🧚‍♀️ | 404 Error</title>
            <meta
                name="description"
                content="404 Error. Page not found. Sorry"
            />
        </Head>
        <h1>Error 404</h1>
        <button onClick={() => Router.push('/')}>{"< На Головну"}</button>
    </>
}