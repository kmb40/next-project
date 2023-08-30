# Next-Project
Nextjs Research and Development

# Objective    
The purpose of this repo is research and development with NextJS. 

# Environement and Preparation used for this event   
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

# Install Nextjs
1. Create package.json files using command `npm init -y``. 
2. Install Nextjs using 'npm install next react react-dom'.
3. In the package.json file, replace the "script section with". You should see something that looks like the following:
```
{
  "name": "next-project",
  "version": "1.0.0",
  "description": "Nextjs Research and Development",
  "main": "index.js",
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "next": "^13.4.19",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}

```   

# Create the Next App
1. Create a directory named "pages".   
2. Within that directory, create a file name 'index.js'.
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

## Verify that the App was created   
1. Use the command 'npm run dev'.   
2. Open a browser window to the path http://localhost:3000 or click the path which should be dispolayed in the terminal.
3. If this worked and you can see the html created in the prior section, then Nextjs is installed and working properly.     