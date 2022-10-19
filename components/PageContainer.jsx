import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import MultiButton from './MultiButton'
import pageContainer from "../css.module/pageContainer.module.css"

export default function PageContainer({ children, header }) {
    return <div style={{
        position: "relative",
        minHeight: "90vh"
    }}>

        <NavBar />
        <MultiButton />
        <div className={pageContainer.container}>
            <div
                style={{ textAlign: "center", paddingTop: 10 }}
            >
                {header}
            </div>
            <div
            // style={{ paddingBottom: "0%", flex: "1 1 0%" }}
            >{children}</div>
        </div>
        <Footer />
    </div>
}
