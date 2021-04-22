# GatorTPED
Gator TPED website is a fully functional website for UF's theme park engineering and design club that acts as a platform for club members to make an account to post their projects for the world to see. It also serves as an information platform for information about the club as well as its executive board members for anyone interesteed in joining the club.

The link to the website is: https://www.gatortped.com/
No installation is needed since it is a website, is has already been deployed. Just use the link to visit it.

To run locally, the user must follow the following instructions.
-Open the files in the GitHub repo in Visual Studio Code.
-Open the terminal and split it.
-Cd into server on one side and cd into client on the other.
-Open the env file under server and replace the email address with the one you want connected to the website.
-On both terminals run the following commands:
  npm install
  npm start
-the website will then open up on a localhost

User functionality is pretty straight forward, but the admin account has a bit more functionality that is crucial to the website as a whole and keeping it up to date. The admin can add or remove executive board members. The admin can also delete any post.

The configuration is as follows:
-Package JSON for the client side:
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.1.5",
    "@ericz1803/react-google-calendar": "^4.1.0",
    "@material-ui/core": "^4.11.3",
    "@material-ui/icons": "^4.11.2",
    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.5",
    "@testing-library/user-event": "^12.8.3",
    "axios": "^0.21.1",
    "classnames": "^2.2.6",
    "is-empty": "^1.2.0",
    "jwt-decode": "^3.1.2",
    "moment": "^2.29.1",
    "react": "^17.0.2",
    "react-big-calendar": "^0.33.2",
    "react-dom": "^17.0.2",
    "react-file-base64": "^1.0.3",
    "react-google-login": "^5.2.2",
    "react-image": "^4.0.3",
    "react-redux": "^7.2.3",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "react_google_calendar": "^2.2.4444",
    "reactstrap": "^8.9.0",
    "recompose": "^0.30.0",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0",
    "web-vitals": "^1.1.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:5000",
  "eslintConfig": {
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not ie <= 11",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

-Package JSON for the server side
{
  "name": "server",
  "version": "1.0.0",
  "description": "Login Auth for GatorTPED",
  "main": "server.js",
  "type": "module",
  "scripts": {
    "client-install": "npm install --prefix client",
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix ../client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
  "author": "Matthew Lorelle",
  "license": "MIT",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "concurrently": "^6.0.0",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "is-empty": "^1.2.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.12.2",
    "nodemailer": "^6.5.0",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "validator": "^13.5.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}



All relevant API keys, passwords, and emails have been sent to the client.

If you have any issues with the webiste's functionality or have any ideas/suggestions, please contact any one of our programmers listed below:
Annabella Vilomar: 305-606-2354 bella@vilomar@gmail.com
Blake Gray: 719-243-1514 blake.gray@ufl.edu
Matthew Lorelle: 321-394-5565 matthewlorelle@gmail.com
Richard Bailey: 727-735-2881 richiebailey74@gmail.com
