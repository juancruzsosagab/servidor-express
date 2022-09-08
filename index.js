const express = require("express")
const app = express()

const port = 8080

const server = app.listen(port, ()=>{
    console.log("Servidor conectado")
})

server.on("error", error =>{
    console.log(error)
})

app.get("/", (req, res)=>{
    const saludo = "<h1 style='color:blue'>Hola soy Juan Cruz</h1>"
    res.send(saludo)
})