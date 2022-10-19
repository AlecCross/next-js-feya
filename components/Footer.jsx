import React from 'react'
import contactsData from "../data/contactsData"

export default function Footer() {
    return (
        <footer
            // style={{
            //     background: "#c51162",
            //     position: "absolute",
            //     bottom: "0",
            //     width: "100%",
            //     height: "2.5rem",
            //     clear: "both",
            //     width: "100%"
            // }}
            style={{
                // background: "#c51162",
                // position: "absolute",
                // bottom: "0",
                // width: "100%",
                // height: "2.5rem",
                // clear: "both",
                // width: "100%",
                background: "#c51162",
                position: "absolute",
                // height: 200,
                
                bottom: "-11.1%",
                width: "100%",
                height: 250 ,
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
