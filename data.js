// how to send html data as a response.....
//jason file as respone
const port= 3004;
const express =require("express")
const app= express()
app.get('/' , (req, res)=>{
   
    res.write("<h1> HOW TO SEND HTML ELEMENT AS A RESPONSE</h1>") // to send more element use write
    res.write("<h1> HOW TO SEND HTML ELEMENT AS A RESPONSE</h1>")
    res.send() // to stop waiting time
})

    app.get('/data' , (req, res)=>{
        res.send({                         // to read or response json data to client
                                      // res.send or res.json will give same output when an object or ////array is passed
            id:1,
            name: "shamim"
        })
        })
   

app.listen(port, ()=>{
    console.log(` listinig on port no ${port}`)
}) 