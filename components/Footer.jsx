import React from 'react'
import contactsData from "../data/contactsData"
import footerStyles from "../css.module/footer.module.css"

export default function Footer() {
    return (
        <footer className={footerStyles.body}>
            {
                contactsData.contacts.map((contact, index) =>
                    <div className={footerStyles.wrapper} key={index}>
                        <a
                            href={contact.link}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                        >
                            {contact.svgIcon}
                            <div className={footerStyles.contacts}>
                                {contact.name}
                            </div>
                        </a></div>)
            }
        </footer >
    )
}
