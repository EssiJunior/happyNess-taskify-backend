<div align="center" style="font-family:consolas;" >
  <img src="./logo_brand.png" alt="HappyNess Logo" width="300"  style="margin:2rem;" >
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

### `→ STEP #1`
> Open this code in your favorite code editor. We recommend you [VS Code](https://code.visualstudio.com/).


### `→ STEP #2`
Install the project's dependencies found in the *_package.json_* file
##### note thet the --legacy-peer-deps flag is used to resolve dependency conflicts that can overcome
```sh
npm install --legacy-peer-deps
```

The command will take a while depending upon your internet speed.

### `→ STEP #3`
Launch server  

```sh
npm start
```
Available at [localhost:4000](http://localhost:4000/)<br><br>
To view the API documentation using Swagger UI, visit [localhost:4000/docs](http://localhost:4000/docs)<br><hr>

`That's it! 🥂`


### `→ OTHERS`

### `run test`

```sh
npm test
```
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
