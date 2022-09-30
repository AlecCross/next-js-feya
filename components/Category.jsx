import React from 'react'
import Link from "next/link"
import Head from 'next/head'

export default function Category({ category, seo }) {
    return <>
        <Head>
            <title>Фея🧚‍♀️ | {seo}</title>
            <meta
                name="description"
                content="Cпідня білизна за доступною ціною. Індивідуальний підбір, з урахуванням ваших уподобань. Бюстгальтери Lanny mode, топи, для годування, коригуюче"
            />
            <meta charSet="utf-8" />
        </Head>
        <ul style={{
            display: "flex", justifyContent: "center", flexWrap: "wrap", marginLeft: 0, paddingLeft: 0
        }}>
            {category.subcategories.map(subcategory => <li style={{ padding: "1%", listStyleType: "none" }} key={subcategory.name}>
                <Link href={`${category.id}/${subcategory.subcategoryId}`} >
                    <a>
                        <img
                            src={`${subcategory.imageUrl}`}
                            alt={`${subcategory.name}`}
                            width="300px"
                            height="300px"
                        />
                        <div style={{ textAlign: "center" }}>{subcategory.name}</div>
                    </a>
                </Link>
            </li>
            )}
        </ul>
    </>
}
