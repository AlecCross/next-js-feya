export default function MyApp({ Component, pageProps }) {
    return <>
        <Component {...pageProps} />
        <style jsx global>
            {`
            body{
                margin: 0; padding: 0;
            }
            `}
        </style>
    </>
}
