# Create the Next App

1. Create a directory named "pages".   
2. Within that directory, create a file name `index.js`.    
   **Note:** If autosave isn't being used, these changes will beed to be manually saved locally before taking affect.   
3. Populate the index.js page with the following:
```
export default function Home () {
    return (
        <div>
            <h1>Welcome to Nextjs</h1>
            <p>Blah Blah Blah Blah</p>
        </div>
    )
}
```
### Verify that the App was created   
1. Use the command `npm run dev`.   
2. Open a browser window to the path http://localhost:3000 or click the path which should be dispolayed in the terminal.
3. If this worked and you can see the html created in the prior section, then Nextjs is installed and working properly.   

## Create links between pages
4. Create an "about" page named `about.js` with the following:
```
export default function About () {
    return (
        <div>
            <h1>About Page</h1>
            <p>Blah Blah Blah Blah</p>
        </div>
    )
}
```
4. Add a link to the About page the following:
```
import Link from 'next/link'

export default function Home () {
    return (
        <div>
            <h1>Welcome to Nextjs</h1>
            <p>Blah Blah Blah Blah</p>
            <Link href="/about">Back</Link>
        </div>
    )
}
```
5. Add a link back to the Home page the following:
```
import Link from 'next/link'

export default function About () {
    return (
        <div>
            <h1>About Page</h1>
            <p>Blah Blah Blah Blah</p>
            <Link href="/">Back</Link>
        </div>
    )
}
```  
## Create App wide code
1. In the "pages" directory, create a page named "_app.js".
2. Add the following code:
```
export default function App({Component, pageProps}) {
  return (
  <>
    <p>Header here</p>
    <Component {...pageProps} />
    <p>Footer here</p>
  </>
  )
}
```
3. The preview page at localhost:3000 should update to reflect your header, original body, and footer content.   

## Style the app
1. Create a "styles" directory.
2. Create a "global.css" file inside of that directory.
3. Use the following basic css for this file:
```
body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  padding: 10px 20px;
  line-height: 1.6;
}

.header-nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
}

.header-nav a {
  color: #a7a7a7;
  margin-right: 10px;
  font-size: 0.9rem;
}

.header-nav a.active {
  color: #222;
}

.site-footer {
  margin-top: 1rem;
  border-top: 1px dotted #adadad;
  text-align: center;
  color: #999;
  font-size: 0.75rem;
}
```
4. Add this css to your app by importing it into the _app.js file. Your code should look like the following:
```
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
```
**Note:** Additional guidance on layouts can be found at [Nextjs.org Docs](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)

## Build Navigation
1. In _app.js, import `next/link` and update the code to relfect new data for the header place holder. 
2. Add a header tag.
3. Add a nav tag and leverage the nav class using `className="header-nav"`.
4. Add an unordered list and two items for your home and about pages.
5. Your code should reflect the following.
```
import "../styles/global.css"
import Link from 'next/link'

export default function App({Component, pageProps}) {
  return (
  <>
    <div>
        <h1>Your Site</h1>
        <nav className="header-nav">
            <ul>
                <l1>
                   <Link href="/">Home</Link>
                </l1>
                <l1>
                   <Link href="/about">About</Link>
                </l1>
            </ul>
        </nav>
    </div>
    <Component {...pageProps} />
    <p>Footer here</p>
  </>
  )
}
```
### Highlight active link
1. Import useRouter by adding `import {useRouter} from 'next/router'`. The useRouter hook allows you to programmatically change routes inside Client Components. 
2. Add `const router = useRouter()`. const is a variable that once it has been created, its value can never change.
3. Add `{router.pathname == "/" ? "active" : ""}` which highlights the active link.

```
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
                   <Link className = {router.pathname == "/" ? "active" : ""} href="/">Home</Link>
                </l1>
                 <l1>
                   <Link className = {router.pathname == "/about" ? "active" : ""} href="/about">About</Link>
                </l1>
                <l1>
                   <Link className = {router.pathname == "/blog" ? "active" : ""} href="/blog">Blog</Link>
                </l1>
            </ul>
        </nav>
    </div>
    <Component {...pageProps} />
    <p>Footer here</p>
  </>
  )
}
```
## Add a Blog link
1. Create a page named "blog.js".
2. Add the following code:
```
import Link from 'next/link'

export default function Blog () {
    return (
        <div>
            <h1>Blog Page</h1>
            <p>Blah Blah Blah Blah</p>
            <Link href="/">Home</Link>
        </div>
    )
}
```  
3. In the `_app.js` file, add an li tag and reformat it for a blog as follows:
```
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
```
4. Your preview / dev page at localhost:3000 should show a navigation menu with working links that are highlighted when active. 

## Add a more complex blog page
1. Add the following code to your `blog.js` page:
```
import Link from "next/link"

export default function Blog(props) {
  return (
    <>
      <h2>The Blog</h2>
      {props.posts.map((post, index) => {
        return (
          <div key={index}>
            <h3>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.content}</p>
            <hr />
          </div>
        )
      })}
    </>
  )
}

// Pulls data from outside of app
export async function getStaticProps() {
  const response = await fetch("https://learnwebcode.github.io/json-example/posts.json")
  const data = await response.json()

  return {
    props: {
      posts: data.posts
    }
  }
}
```