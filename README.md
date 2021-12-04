

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
  - Pre-push:
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
# If u have installed gatsby global:
gatsby develop
```  

Your site is now running at http://localhost:8000

3. **Scripts explanation**  
   TODO also:
   plop, structure
