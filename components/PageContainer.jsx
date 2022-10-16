import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function PageContainer({ children, header }) {
    return <>
        <NavBar />
        <div className="container">
            <h1 style={{ display: "flex", justifyContent: "center", margin: "70px 0 0 0" }} >{header}</h1>
            <div>{children}</div>
        </div>
        <Footer/>
        <style jsx>{
            `
            .container {
                margin: 0 auto;
                max-width: 1280px;
                width: 90%;
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
    </>
}
