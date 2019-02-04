# JS-Accounts
Account system using NodeJS backend with ReactJS frontend, and MYSQLDB as Database.

# Setup:

 - First install `yarn`
 - Afterwards run `yarn install` to install all running modules
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
