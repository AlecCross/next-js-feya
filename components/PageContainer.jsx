import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import MultiButton from './MultiButton'

export default function PageContainer({ children, header }) {
    return <div style={{
        position: "relative",
        minHeight: "90vh"
    }}>
        <NavBar />
        <MultiButton />
        <div className="container"
            // style={{
            //     position: "relative", top: 70, 
            //     zIndex: 0, 
            //     bottom: 70
            // }}
        >
            <h1 style={{ borderColor: "white", textAlign: "center", }} >{header}</h1>
            <div style={{ paddingBottom: "10%" }}>{children}</div>
        </div>
        <Footer />
        <style jsx>{
            `
            .container {
                margin: 0 auto;
                max-width: 1280px;
                width: 90%;
                margin-top: 50px;
            }
            
            @media only screen and (min-width: 150px) {
                .container {
                    width: 100%;
                }
            }
            
            @media only screen and (min-width: 601px) {
                .container {
                    width: 100%;
                }
            }
            @media only screen and (min-width: 719px) {
                .container {
                    width: 85%;
                }
            }
            
            @media only screen and (min-width: 993px) {
                .container {
                    width: 70%;
                }
            }
            `
        }</style>
    </div>
}
