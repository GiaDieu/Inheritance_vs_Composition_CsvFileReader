### npm i

#### To intall the dependencies

#### and run the npm start to start the project

---

### 1. Understanding the steps to set-up TypeScript of the project

- TypeScript Compiler to set up TypeScript Environment:
  > npm install -g typescript ts-node
- Generate and create the tsconfig file:

  > tsc --init <br/>

  > uncommand rootDir in the tsconfig.json and add sources folder of the project **"rootDir": "./src"** <br/>

  This means we are taking all codes in src folder and complie them.
  <br/>

  > uncommand outDir in the tsconfig.json to show all complied code (js files) in folder build , add **"outDir" : "./build"**

  And Run **tsc** instead of **tsc index.ts** as usual.<br/>

  Or Run **tsc -w** environment means watch all the files inside the rootDir and recompile after the changes in the rootDir to compile files in outDir

  And open another terminal environment and run **"node build/index.js"** to see the result everytime we make a change

### 2. How to automatically running compile, and show the result :

    > "npm init -y" to generate the package.json
    > "npm install nodemon concurrently" to install these 2 tools

- nodemon is helping us rerun the project after we make any changes automatically
- concurrently is helping us run multiple scripts at the same time

#### How:

```json
"scripts": {
    "start:build": "tsc -w" // typescript compiler watch-mode

    "start:run": "nodemon build/index.js", //run the complied codes

    "start": "concurrently npm:start:*" // start: build and start:run at the same time, use 1 command line npm start for one go
  },
```

as the result, we complie the code , and rerun it every single time we make any changes
