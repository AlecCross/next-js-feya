import Head from "next/head"
import React from "react"
import PageContainer from "../components/PageContainer"

export default function Index() {
    return <>
        <Head>
            <title>Фея🧚‍♀️ | Список бажань</title>
            <meta
                name="description"
                content="Cпідня білизна за доступною ціною. Індивідуальний підбір, з урахуванням ваших уподобань. Бюстгальтери Lanny mode, топи, для годування, коригуюче"
            />
            <meta charSet="utf-8" />
        </Head>
        <PageContainer header={"Список бажань"}>
            <h2 style={{ textAlign: "center", fontSize: 26 }}>У списку бажань немає товарів.</h2>
            <button style={{
                background: "#c51162",
                color: "white",
                fontSize: "min(2.5vw, 14px)",
                margin: "10px 40%",
                padding: "8px 20px",
                borderRadius: "2px"
            }}>⬅&nbsp;&nbsp;&nbsp;ДО ПОКУПОК</button>
        </PageContainer>
    </>
}
