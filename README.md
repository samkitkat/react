### How to create react app and then deploy on github pages

npx create-react-app react-app

!!!cd react-app!!!!

npm install gh-pages --save-dev

git init

git status

add to package.json:

    "homepage": "https://username.github.io/react-app/“,

    "predeploy": "npm run build",

    "deploy": "gh-pages -d build”

git add .

git commit -m “initial commit”

git remote add origin https://github.com/username/react-app.git

git push -u origin master

npm run deploy
