const path = require("path");
const express = require('express');
const Apps = express();

Apps.set("view engine", "hbs");

// Create routing
Apps.get('/', (req, res) => {
    
    res.render('index', {
        contact: "shamim"   //this will cahnge the value dynamically as you set here
    }); // this will render the hbs file
});

Apps.get('/about', (req, res) => {
    res.send('Hello, this is the homepage of About!');
});
Apps.listen(8006 ,()=>{
    console.log("listining on port 8005")
})