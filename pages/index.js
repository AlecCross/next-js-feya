import Link from "next/link"
import Head from "next/head"
import SignIn from "../components/SignIn"
import categoriesData from "../data/categoriesData"

export default function Index() {
  console.log("categoriesData: ", categoriesData.categories)
  return <>
    <Head>
      <title>Фея🧚‍♀️ | Інтернет магазин спідньої білизни</title>
      <meta
        name="description"
        content="Cпідня білизна за доступною ціною. Індивідуальний підбір, з урахуванням ваших уподобань. Бюстгальтери Lanny mode, топи, для годування, коригуюче"
      />
      <meta charSet="utf-8" />
    </Head>
    <nav style={{ background: "#c51162", padding: 15 }}>
      <Link href={'/contacts'}><a>Контактни</a></Link>
      <Link href={'/wishlist'}><a>Список бажань</a></Link>
      <Link href={'/cart'}><a>Кошик</a></Link>
    </nav>
    <h1>Групи товарів</h1>
    <SignIn />
    <ul>
      {Object.entries(categoriesData.categories).map(([categoryDataKey, categoryDataValue]) =>
        <li key={categoryDataKey}>
          <Link href={`${categoryDataKey}`} as={categoryDataKey} categoryValue={categoryDataValue}>
            <a>{categoryDataKey}</a>
          </Link>
        </li>
      )}
    </ul>
  </>
}
