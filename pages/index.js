import Link from "next/link"
import Head from "next/head"
import SignIn from "../components/SignIn"
import db from "../db.json"

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
    <nav style={{ display: "flex", justifyContent: "center", background: "#c51162", height: 50 }}>
      <Link href={'/contacts'}><a style={{ padding: "1%", color: "white" }}>Контактни</a></Link>
      <Link href={'/wishlist'}><a style={{ padding: "1%", color: "white" }}>Список бажань</a></Link>
      <Link href={'/cart'}><a style={{ padding: "1%", color: "white" }}>Кошик</a></Link>
      <SignIn />
    </nav>
    <h1 style={{ display: "flex", justifyContent: "center" }}>Групи товарів</h1>

    <ul style={{ display: "flex", justifyContent: "center" }}>
      {categories.items.map(category =>
        <li style={{ padding: "1%" }} key={category.id}>
          <Link href={`${category.id}`} >
            <a>
              <div>
                <img
                  src={`${category.image}`}
                  alt={`${category.name}`}
                  width="100%"
                  height="100%"
                />
              </div>
              <div>
                <h3>{category.name}</h3>
                <p>{category.desc}</p>
              </div>
            </a>
          </Link>
        </li>
      )}
    </ul>
  </>
}

export const getStaticProps = async () => {

  return {

    props: { categories: db }
  }
}
