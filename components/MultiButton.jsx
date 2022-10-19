import React, { useState } from 'react'
import Link from "next/link"
import buttonStyle from '../css.module/multiButton.module.css'

export default function MultiButton() {
    const [buttonIsPressed, setButtonIsPressed] = useState(false)

    return <>
        <div
            onClick={() => setButtonIsPressed(!buttonIsPressed)}
            className={buttonStyle.mainButton}
        >
            {buttonIsPressed ?
                <>
                    <Link href="/wishlist">
                        <a className={buttonStyle.secondButton}>💗</a>
                    </Link>

                    <Link href="/cart">
                        <a className={buttonStyle.thirdButton}>🛒</a>
                    </Link>

                </> :
                <></>
            }
        </div>
    </>
}
