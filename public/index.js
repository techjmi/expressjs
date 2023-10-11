const path = require("path");
const express = require('express');
const Appp = express();

console.log(__dirname); // This is called the wrAppper function. It returns the path of the file.

// Use path.join to get the correct absolute path to the 'public' folder
const staticPath = path.join(__dirname, "../public");
console.log(staticPath); // Optionally, log the staticPath to verify it's correct

// Use express.static with the correct staticPath
// Appp.use(express.static(staticPath));  // now try hbs by commenting out this
// Use express.static with the correct staticPath
// Appp.use(express.static(staticPath));  // now try hbs by commenting out this

Appp.set("view engine" , "hbs")
// Create routing
Appp.get('/', (req, res) => {
    // res.render("index");          // this wil render the hbs file
    res.send(" welcome to my page")
});

Appp.get('/about', (req, res) => {
    res.send('Hello, this is the homepage of About!');
});

Appp.listen(8005, () => {
    console.log("Listening on port 8001");
})