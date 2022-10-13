import SignIn from "./SignIn"
import Link from "next/link"
import styles from '../css.module/nav.module.css'
import cx from "classnames"
import React, { useState } from 'react'

export default function NavBar() {
    const [burger, setBurger] = useState(false)

    return (
        <header className={cx(styles.header, "container")} >
            <div className={styles.header__container}>
                <Link href={'/'}>
                    <a href="" className={styles.header__logo}>Feya</a>
                </Link>
                <nav className={burger ? cx(styles.menu__body, styles._active) : styles.menu__body}>
                    <ul className={styles.menu__list}>
                        <li>
                            <Link href={'/contacts'}>
                                <a className={styles.menu__link}>Контактни</a>
                            </Link></li>
                        <li>
                            <Link href={'/wishlist'}>
                                <a className={styles.menu__link}>Список бажань</a>
                            </Link></li>
                        <li>
                            <Link href={'/cart'}>
                                <a className={styles.menu__link}>Кошик</a>
                            </Link></li>
                        <li><SignIn /></li>
                    </ul>
                </nav>
                <div onClick={() => setBurger(!burger)} className={styles.menu__icon}>
                    <span></span>
                </div>
            </div>
        </header>
    )
}
