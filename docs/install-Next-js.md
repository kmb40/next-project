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