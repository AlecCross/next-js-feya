import React from 'react'
import contactsData from "../data/contactsData"

export default function Footer() {
    return (
        <footer style={{
            background: "#c51162",
            position: "fixed",
            bottom: 0,
            left: 0,
            clear: "both",
            width: "100%"
        }}>
            {
                contactsData.contacts.map((contact, index) =>
                    <div
                        key={index}
                        style={{ margin: 20 }}
                    >
                        <a
                            href={contact.link}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                        >
                            {contact.svgIcon}
                            <div style={{
                                color: "white",
                                display: "inline",
                                position: "relative",
                                bottom: 17,
                                left: 5
                            }}>
                                {contact.name}
                            </div>
                        </a></div>)
            }
        </footer >
    )
}
