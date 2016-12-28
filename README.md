## A React Web App Game
### Installation

> Install the latest version of [node lts](https://nodejs.org).
>
Install [yarn](https://yarnpkg.com/).
>
>Then clone this repo:
>
```
git clone git@github.com:benjaminboruff/destroyer.git
```
Then cd into the cloned repo and run yarn to install the dependencies.
```
cd destroyer/
yarn
```

### Usage
>To start the hot-reload development server (default port 3000)
```
yarn start
```
To run the jest/enzyme tests
```
yarn tests
```
To make a production build to deploy to your github account as a gh-pages project, you must first edit the package.json file and change the "homepage" property to your own; e.g. {"homepage": "http://your-gh-username.github.io/destroyer"}. If you just want a generic build created in the build/ directory, then leave the "homepages" proerty blank. And, of course, you don't have to call it destroyer :smile:
```
yarn build
```
To deploy to your gh-pages configured repo
```
yarn deploy
```
