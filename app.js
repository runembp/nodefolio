"use strict"

const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index/index.html`)
})

app.get("/installing", (req, res) => {
    res.sendFile(`${__dirname}/public/installing/installing.html`)
})

app.get("/setup", (req, res) => {
    res.sendFile(`${__dirname}/public/setup/setup.html`)
})

app.get("/use", (req, res) => {
    res.sendFile(`${__dirname}/public/use/use.html`)
})

app.get("/test", (req, res) => {
    res.send(tests)
})

app.get("/test/:id", (req, res) => {
    res.send(tests[req.params.id])
})

app.post("/test/", (req, res) => {
    tests.push(req.body)
    res.send(req.body)
})

app.put("/test/:id", (req, res) => {
    console.log(tests[req.params.id])
    tests[req.params.id] = req.body
    res.sendStatus(200)
})

app.patch("/test/:id", (req, res) => {
    tests[req.params.id].foofoo = req.body
    res.sendStatus(200)
})

app.delete("/test/:id", (req, res) => {
    tests.slice(req.params.id)
    res.sendStatus(200)
})

app.get("/advanced_setup", (req, res) => {
    res.sendFile(`${__dirname}/public/advanced_setup/advanced_setup.html`)
})

app.get("/advanced_json", (req, res) => {
    res.sendFile(`${__dirname}/public/advanced_json/advanced_json.html`)
})

const PORT = process.env || 80
const server = app.listen(PORT, (error) => {
    if(error) {
        console.log(`Error occurred: ${error}`)
    }

    console.log(`Server is running on: http://localhost:${server.address().port}`)
})

let tests = [{Hello: "World"}]