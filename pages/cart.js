import Head from "next/head"
import React from "react"
import PageContainer from "../components/PageContainer"

export default function Index() {
    return <>
        <Head>
            <title>Фея🧚‍♀️ | Кошик</title>
            <meta
                name="description"
                content="Cпідня білизна за доступною ціною. Індивідуальний підбір, з урахуванням ваших уподобань. Бюстгальтери Lanny mode, топи, для годування, коригуюче"
            />
            <meta charSet="utf-8" />
        </Head>
        <PageContainer header={"Кошик"}></PageContainer>
    </>
}
