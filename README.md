<div align="center" style="font-family:consolas;" >
  <h1>Welcome to the task management app (intergration test) backend repository</h1>
  <h3>Node.js based APIs source code</h3>
</div>
<br>


## `🚀 Running the task management APIs locally`

Let's setup the app locally. First, you need to download this code 

```sh
git clone https://github.com/EssiJunior/happyNess-taskify-backend.git
```


## `⚙️ Setting Up The Development Environment`
This code was written using [Express - JavaScript libary](https://expressjs.com/). Below are the instructions to follow to run our application.

### `→ STEP #0`

> Make sure you have node 16 or above installed on your machine. Take a look at the [official guide](https://nodejs.org/en/download) for installation. After installation, run the following command in your terminal for a double check.
###### node v16.0.0 or above // Expected result
```sh
node --version
```

> Make sure you have mysql server installed on your machine. Take a look at the [official guide](https://dev.mysql.com/downloads/mysql/) for installation. After installation, run the following command in your terminal for a double check.

```sh
mysql --version
```

> Environment variables

Please make sure you create a `.env` file at the root of the source code (near the index.js file) and insert the following varriables

```sh
DB_NAME = taskify

DB_HOST = localhost
DB_DIALECT = mysql
DB_USERNAME = your_mysql_username
DB_PASSWORD = your_mysql_password

MYSQLDB_LOCAL_PORT=3306
MYSQLDB_DOCKER_PORT=3306

NODE_LOCAL_PORT=5000
NODE_DOCKER_PORT = 5000
```

### `→ STEP #1`
> Open this code in your favorite code editor. We recommend you [VS Code](https://code.visualstudio.com/).


### `→ STEP #2`
Install the project's dependencies found in the *_package.json_* file
##### if an error occur, append (add to the end) with the `--legacy-peer-deps` flag
```sh
npm install 
```

The command will take a while depending upon your internet speed.

### `→ STEP #3`
Launch server  

```sh
npm start
```
Available at [localhost:5000](http://localhost:5000/)<br><br>
To view the API documentation using Swagger UI, visit [localhost:5000/docs](http://localhost:5000/docs) (RECOMMENDED)<br><hr>

`That's it! 🥂`


### `→ OTHERS`

### `run test`

```sh
npm test
```
Launches the jest test runner.



### `Troubleshooting`
If you encounter an error of `Connection error: unknown database taskify` please create it manually by copy pasting the following query in your data UI or just create and name it `taskify`

```sh
CREATE DATABASE IF NOT EXISTS taskify
```
