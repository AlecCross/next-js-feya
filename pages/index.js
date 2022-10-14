import Head from "next/head"
import db from "../db.json"
import PageContainer from "../components/PageContainer"
import Link from "next/link"
import Slider from "../components/Slider"
import gridStyle from "../css.module/grid.module.css"

export default function Index({ categories }) {
  return <>
    <Head>
      <title>Фея🧚‍♀️ | Інтернет магазин спідньої білизни</title>
      <meta
        name="description"
        content="Cпідня білизна за доступною ціною. Індивідуальний підбір, з урахуванням ваших уподобань. Бюстгальтери Lanny mode, топи, для годування, коригуюче"
      />
      <meta charSet="utf-8" />
    </Head>
    <PageContainer header={"Групи товарів"}>
      {/* <Slider /> */}
      <ul className={gridStyle.container}>
        {categories.items.map(category =>
          <li className={gridStyle.element} key={category.id}>
            <Link href={`${category.id}`} >
              <a>
                <img className={gridStyle.element__img}
                  src={`${category.image}`}
                  alt={`${category.name}`}
                />
                <div className={gridStyle.element__name}>{category.name}</div>
              </a>
            </Link>
          </li>
        )}
      </ul>
    </PageContainer>
  </>
}

export const getStaticProps = async () => {

  return {

    props: { categories: db }
  }
}
