# JS-Accounts
Account system using NodeJS backend with ReactJS frontend, and MYSQLDB as Database.

# Requirements

 - [x] NodeJS v10.13.0 or higher
 - [x] NPM v6.2.0 or higher
 - [x] Yarn v1.10.1 or higher

# Setup:

 - First install `yarn`
 - Afterwards run `yarn install` to install the required npm packages
 - Once that is done you will need to edit `mysqlpool.js` and fill in
   the following fields:

```
  mysqlPoolLimit: 5000,
  host     : 'localhost', // Your database IP
  user     : 'root',	//  Username, root is not recommended
  password : 'password', // Password
  database : 'mycooldb' // Database name in which the files will be created.
```

 - Afterwards if you want to manually insert  tables in your DB feel
   free to do it, otherwise you can uncomment line `22` in `Server.js`
   and on first launch the server will insert the required tables into
   DB.

> Note: You can leave the line uncommented, although it is recommended that you comment the line out and restart the server once again.

# Commands

 - `yarn build` - Will build solution to dist folder for production use
 - `yarn start:dev` - Will start a webpack dev server on port: 8080
 - `yarn start:ele` - Will start a developer Electron app
 - `yarn build:ele` - Will attempt to build a fully working Electron app (Note: This is not fully working)
 - `nodemon server.js` - Will start a backend Development server which will watch for changes in server.
 - `node server.js` - Will start the backend server.
