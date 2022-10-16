import Head from "next/head"
import React from "react"
import PageContainer from "../components/PageContainer"
import contactsData from "../data/contactsData"

export default function Index() {
    return <>
        <Head>
            <title>Фея🧚‍♀️ | Контактна інформація</title>
            <meta
                name="description"
                content="Cпідня білизна за доступною ціною. Індивідуальний підбір, з урахуванням ваших уподобань. Бюстгальтери Lanny mode, топи, для годування, коригуюче"
            />
            <meta charSet="utf-8" />
        </Head>
        <PageContainer header={"Контактна інформація"}>
            {contactsData.contacts.map((contact, index) =>
                <div key={index}><a
                    href={contact.link}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    
                >
                    {contact.svgIcon}
                    <div style={{ display: "inline-block", position: "absolute", paddingTop: "1vw", paddingLeft: "1vw" }}>
                        {contact.description}
                        {contact.name}
                    </div>
                </a></div>)}
        </PageContainer>
    </>
}
