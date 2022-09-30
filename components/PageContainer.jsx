import React from 'react'
import SignIn from "./SignIn"
import Link from "next/link"

export default function PageContainer({ children, header }) {
    return <>
        <nav style={{ display: "flex", justifyContent: "center", background: "#c51162", height: 50 }}>
            <Link href={'/'}><a style={{ padding: "1%", color: "white" }}>Feya</a></Link>
            <Link href={'/contacts'}><a style={{ padding: "1%", color: "white" }}>Контактни</a></Link>
            <Link href={'/wishlist'}><a style={{ padding: "1%", color: "white" }}>Список бажань</a></Link>
            <Link href={'/cart'}><a style={{ padding: "1%", color: "white" }}>Кошик</a></Link>
            <SignIn />
        </nav>
        <h1 style={{ display: "flex", justifyContent: "center" }}>{header}</h1>
        <div className="container">{children}</div>
        <footer style={{ display: "flex", justifyContent: "center", background: "#c51162", height: 150 }}>
            <h1 style={{ color: "white" }}>Feya</h1>
        </footer>
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
