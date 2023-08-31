# Next-Project
Nextjs Research and Development

# Objective    
The purpose of this repo is research and development with NextJS. 

# Environment and Preparation used for this event   
These are the tools used to conduct this research and development. 

## Hardware
* Macbook - MacOS Ventura 13.4.2

## Software
* VS Code - Version: 1.82.0-insider (Note: all references to the command line refer to the VSCode command line unless otherwise noted) (Optional)
* ReactJS - Version 18.2.0
* NextJS - Version
* NodeJS - Version 18.7.1
* NPM - Version 9.6.7
    

# Setup
## Install Node.js and NPM (Node Package Manager)
1. To install Node.js and NPM which are required for React, visit - https://nodejs.org/en/download and follow the instructions for using the .pkg file in your Downloads folder to run the installer.   

## Verify Node and NPM are installed
1. Confirm installation with `node -v` and `npm -v` at the command line.   
    **Note:** Node and NPM are required or the following steps will not work!

# Lab Work
## [Install Nextjs](/docs/install-Next-js.md)

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
