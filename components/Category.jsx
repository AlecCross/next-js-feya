import React from 'react'
import Link from "next/link"
import Head from 'next/head'
import gridStyle from "../css.module/grid.module.css"
import PageContainer from "../components/PageContainer"

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
        <PageContainer header={category.name}>
            <ul className={gridStyle.container}>
                {category.subcategories.map(subcategory =>
                    <li className={gridStyle.element} key={subcategory.name}>
                        <Link href={`${category.id}/${subcategory.subcategoryId}`} >
                            <a>
                            <div className={gridStyle.element__img_wrapper}>
                                    <img className={gridStyle.element__img}
                                        src={`${subcategory.imageUrl}`}
                                        alt={`${subcategory.name}`}
                                    />
                                </div>
                                <div className={gridStyle.element__name}>{subcategory.name}</div>
                            </a>
                        </Link>
                    </li>
                )}
            </ul>
        </PageContainer>
    </>
}
