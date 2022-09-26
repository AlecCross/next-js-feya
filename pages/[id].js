import { useRouter } from "next/router"
import React from "react"
import Router from "next/router"
import Image from "next/image"

export default function Details({ burger }) {
    const router = useRouter()
    console.log(burger)
    return <>
        <button onClick={() => Router.push('/')}>{"< На Головну"}</button>
        <div>{router.query.burger}</div>
        <div>{burger.name}</div>
        <Image
            src={`${burger.image}`}
            alt={`${burger.name}`}
            width="100%"
            height="100%"
            Layout="responsive"
            objectFit="cover"
        />
        <div>{burger.desc}</div>
    </>
}

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:8000/items')
    const data = await res.json()
    console.log(data)
    const paths = data.map(burger => {
        return {
            params: { id: burger.id }
        }
    })

    return {
        paths,
        fallback: false //Чтоб при неверном url отобразить 404
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id

    const res = await fetch(`http://localhost:8000/items/${id}`)
    const data = await res.json()

    return {
        props: {
            burger: data
        }
    }
}
