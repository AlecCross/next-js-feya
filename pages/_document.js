import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return <>
            <Html>
                <Head >
                    <script src={"https://accounts.google.com/gsi/client"} defer></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        </>
    }
}
