import "../styles/global.css"
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function App({Component, pageProps}) {
  const router = useRouter()

  return (
  <>
    <div>
        <h1>Your Site</h1>
        <nav className="header-nav">
            <ul>
                <l1>
                   <Link className={router.pathname == "/" ? "active" : ""} href="/">Home</Link>
                </l1>
                <l1>
                   <Link className = {router.pathname == "/about" ? "active" : ""} href="/about">About</Link>
                </l1>
                <l1>
                   <Link className={router.pathname == "/blog" ? "active" : ""} href="/blog">Blog</Link>
                </l1>
            </ul>
        </nav>
    </div>
    <Component {...pageProps} />
    <p>Footer here</p>
  </>
  )
}