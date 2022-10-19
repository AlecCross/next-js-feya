import Head from "next/head"
import React from "react"
import PageContainer from "../components/PageContainer"
import contactsData from "../data/contactsData"
import contactsStyles from "../css.module/contacts.module.css"

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
            <div className={contactsStyles.wrapper}>
                {contactsData.contacts.map((contact, index) =>
                    <div className={contactsStyles.element}
                        key={index}><a
                            href={contact.link}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                        >
                            {contact.svgIcon}
                            <div className={contactsStyles.list}>
                                {contact.description}
                                {contact.name}
                            </div>
                        </a></div>
                )}
            </div>
        </PageContainer>
    </>
}
