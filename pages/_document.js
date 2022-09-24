import Document, { Html, Head, Main, NextScript } from 'next/document'
import { render } from 'react-dom'

export default class MyDocument extends Document {
    render() {
        return <>
            <Html>
                <Head >
                    <script src="https://apis.google.com/js/api.js"></script>
                    <script src="https://accounts.google.com/gsi/client" async defer></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </>
    }
}
