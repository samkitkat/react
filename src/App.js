import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          How to create react app and then deploy on github pages
        </p>

        <ul>
          <li>npx create-react-app react-app</li>
          <li>!!!cd react-app!!!!</li>
          <li>npm install gh-pages --save-dev</li>
          <li>git init</li>
          <li>git status</li>
          <li>add to package.json:
            <ul>
              <li>"homepage": "https://username.github.io/react-app/“,</li>
              <li>"predeploy": "npm run build",</li>
              <li>"deploy": "gh-pages -d build”</li>
            </ul>
           </li>
           <li>git add .</li>
           <li>git commit -m “initial commit”</li>
           <li>git remote add origin https://github.com/username/react-app.git</li>
           <li>git push -u origin master</li>
           <li>npm run deploy</li>
        </ul>

        <br/>

        <p></p>

      </header>
    </div>
  );
}

export default App;
