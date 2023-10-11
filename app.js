// require express module to use express application...
// to craete an express application we need to expess function....


//In Express.js, routing refers to the definition of application end points (URIs) and the HTTP methods (GET, POST, PUT, DELETE, etc.) that the server can handle.

//Define routes using the app.get(), app.post(), app.put(), app.delete(),
const express = require('express')
const App = express()
// create routing....
//take two parameters.....route and callback function....
// ......" / " this represnt home page...
App.get('/', (req, res) => {
    res.send('Hello, this is the homepage of expressJS!'); //this will send reponse to the client
});
App.get('/about', (req, res) => {
    res.send('Hello, this is the homepage of About!'); //this will send reponse to the client
});
App.listen(8000, ()=>{
    console.log("listining on port 8000")
})

