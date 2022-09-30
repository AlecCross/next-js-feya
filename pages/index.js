import Head from "next/head"
import db from "../db.json"
import PageContainer from "../components/PageContainer"
import Link from "next/link"

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
      <ul style={{
        display: "flex", justifyContent: "center", flexWrap: "wrap", marginLeft: 0, paddingLeft: 0
      }}>
        {categories.items.map(category =>
          <li style={{ padding: "1%", listStyleType: "none" }} key={category.id}>
            <Link href={`${category.id}`} >
              <a>
                <img
                  src={`${category.image}`}
                  alt={`${category.name}`}
                  width="300px"
                  height="300px"
                />
                <div style={{ textAlign: "center" }}>{category.name}</div>
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
