import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import MultiButton from './MultiButton'
import pageContainerStyles from "../css.module/pageContainer.module.css"
import footerStyles from "../css.module/footer.module.css"

export default function PageContainer({ children, header }) {
    return <div className={footerStyles.bottomPos}>
        <NavBar />
        <MultiButton />
        <div className={pageContainerStyles.container}>
            <div className={pageContainerStyles.headerTitle}>
                {header}
            </div>
            <div
            >{children}</div>
        </div>
        <Footer />
    </div>
}
