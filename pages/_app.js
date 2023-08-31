import "../styles/global.css"

export default function App({Component, pageProps}) {
  return (
  <>
    <p>Header here</p>
    <Component {...pageProps} />
    <p>Footer here</p>
  </>
  )
}