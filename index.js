console.log ("Jai Hanuman ji");
// import express from "express"// same 
const express = require('express') //same 


// // Server configuration

// const hostname = '127.0.0.1'; // localhost address
// const port = 3000;            // Port number

const app = express()
const port = 3000  // browser pr jaker localhost:3000(port n)

app.get('/', (req, res) => {    // req ye request hai or res ye response hai
  res.send('Hello World!')
})
// app.get('/twitter', (req , res) => {
//     res.send ('Himanshu Sengar')
// })
app.get('/login', (req , res ) =>  {
    res.send('<h1> please login at my code</h1>')
})
app.get('/youtube', ( req , res ) => {
    res.send('<h2> this is my youtube link </h2>')
})
// app.listen(port, () => { // port is the variable 
app.listen(process.env.PORT, () => { // port is the variable 
  console.log(`Example app listening on port ${port}`)  //print ${port}  is mai ham nai variable ko print ker ba diya hai variable ko print ker bane kai liye { } ke bhiter likh te hai 

})