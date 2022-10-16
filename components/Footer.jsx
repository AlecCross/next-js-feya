import React from 'react'
import contactsData from "../data/contactsData"


export default function Footer() {
    return (
        <footer style={{ background: "#c51162", }}>
            {contactsData.contacts.map((contact, index) =>
                <div key={index} style={{display: "flex", flexWrap: "wrap" }}><a
                    href={contact.link}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    
                >
                    {contact.svgIcon}
                    <div>
                        {contact.description}
                        {contact.name}
                    </div>
                </a></div>)}
        </footer>
    )
}
