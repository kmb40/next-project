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
3. Navigate into the directory using 'cd "your-app"'.   
   **Note:** At any time you can verify that you are in the correct directory using `pwd` at the command.   
3. Create a React project using the command 'npx create-react-app your-app'.   
   **Note:** The installation may take some time. Also, note that a large number of files that are not required will be created by default when this method is used.   

## Verify that the project was created   
1. Use the command 'npm start'.   
2. A browser window should open - to the path http://localhost:3000 in the url field displaying the React logo and a link named "Learn React". If not, then repeat the steps carefully.   
3. React is installed and working properly.     
   **Note:** A large number of files that are not required will be created by default when this method is used.[Vite offers an alternative smaller installation](#alternative-installation-with-vite)   

## Alternative project creation with Vite
1. Follow the above instructions for [Install Node.js and NPM (Node Package Manager)](#create-the-react-app-see-the-alternative-installation-with-vite-for-a-faster-installation).    
2. To install Vite, use 'npm create vite@latest' at the command line.   
3. Select "React" --> "Javascript + SWC" (SWC is also a transpiler for JavaScript, it is written in Rust and is much faster than Babel.)   
4. The installation should be completed in seconds.   
5. Make sure that you are in the project directory then run 'npm install', then 'npm run dev'. 
