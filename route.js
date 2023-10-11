//In Express.js, routing refers to the definition of application end points (URIs) and the HTTP methods (GET, POST, PUT, DELETE, etc.) that the server can handle. Here's a simple guide on how to create routing in Express.js:
//



const expess = require("express")
const app =expess(); //call express function
const port= 3001;
app.get("/", (req,res)=>{
    res.send(" hello this is about our home page")
})
app.get("/about", (req,res)=>{
    res.send(" hello this is about our home ABOUT")
})
app.get("/contact", (req,res)=>{
    res.send(" hello this is about our home CONTACT")
})
app.listen(port, ()=>{
    console.log(` listinig on port no ${port}`)
}) 