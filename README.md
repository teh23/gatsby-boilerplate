

# 🚀 Gatsby boilerplate
[![Build Status](https://travis-ci.org/apollographql/eslint-plugin-graphql.svg?branch=master)](https://travis-ci.org/apollographql/eslint-plugin-graphql)

Simple starter template for gatsby to enhance your project start

## Features
- Gatsby v4 support
- Typescript
- Tailwindcss for styling
- Eslint configured
- Prettier
- Redux
- Jest
- Husky with pre-commit & pre-push scripts
  - Pre-commit with lint-staged:
    - Prettier --save
    - Eslint --fix
    - Jest --findRelatedTests
  - Pre-push: **NOT RECOMMEND***
    - Jest
    - Prettier --list-different
    - Eslint
    - Build
- Plop for building with templates:
  - features, component both pure and with redux and page
- Gatsby plugins as:
  - gatsby-source-api, react-helmet, robots-txt, sass, sitemap and others
- Standard folder structure for react apps
- Template SEO


**better option is just use travis or smth like that*
##  Quick start

1. **Installation**

 ```shell
 git clone https://github.com/teh23/gatsby-boilerplate.git
 cd ./gatsby-boilerplate 
 npm install
 npm run prepare
 ```

2. **Start developing**
```shell  
npm run develop
```  

Your site is now running at http://localhost:8000

## Explanations
1. **Additonal scripts**  
```json
"scripts": {
  "develop": "gatsby develop",
  "start": "gatsby develop",
  "build": "gatsby build",
  "serve": "gatsby serve",
  "clean": "gatsby clean",
  "test": "jest",
  // --findRelatedTests runs the minimum number of tests needed, --bail exit when test fail
  "test:commit": "jest --watchAll=false --findRelatedTests --bail",
  //--watchAll watch mode
  "test:watch": "jest --watchAll",
  "format": "prettier --ignore-path .gitignore \"./**/*.+(js|jsx|json|ts|tsx)\"",
  "format:check": "prettier --ignore-path .gitignore \"./**/*.+(js|jsx|json|ts|tsx)\" --list-different",
  "format:save": "prettier --ignore-path .gitignore \"./**/*.+(js|jsx|json|ts|tsx)\" --write",
  //needed to use once
  "prepare": "husky install",
  "lint": "eslint --ext .js,.jsx,.ts,.tsx src --color",
  //--fix  it fix some problems if it's possible
  "lint:fix": "eslint --ext .js,.jsx,.ts,.tsx src --color --fix",
  "pre-push": "npm-run-all --parallel test format:check lint build",
  //run lint-staged
  "pre-commit": "lint-staged",
  //it run plop CLI (see below)
  "plop": "plop"
},
//commands running before commit
"lint-staged": {
  "./src/**/*.{js,jsx,ts,tsx}": [
    "npm run format:save",
    "npm run lint:fix",
    "npm run test:commit"
  ]
},
 ```
2. **plop CLI**  

After running `npm run plop` u will see this:

![Plop](https://i.imgur.com/ewnaPXr.png)

As you can see, we can generate 5 templates. The differences between a component and a feature are generally name, and where the files are placed. For example, 
creating a component with the name Button generates the following tree structure:
![Structure](https://i.imgur.com/VaDV5em.png)

And files look like:
![Files](https://i.imgur.com/bIW2aVw.png)

Redux components generating following structure: 

![FilesRedux](https://i.imgur.com/PpwF5RM.png)

As image above show, we create the same files as without redux but also reducer and modify types and store 

![Redux](https://i.imgur.com/mQ149jG.png)

Pay attenion about `// APPEND TYPE` `// APPEND REDUCER` and 
`// APPEND IMPORT` in index.ts and store.ts, plop use this comments for modify this files and **DONT DELETE THIS 
LINES** if u want use plop
