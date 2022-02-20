//import express body-parser and cors modules
let express = require("express")
let body_parser = require("body-parser")
let cors = require("cors")
//create rest object
let app = express()
//set JSON as MIME type
app.use(body_parser.json())
//client not sending form data -> encoding to JSON
app.use(body_parser.urlencoded({extended: false}))
//enable CORS -> Cross Origin Resource Sharing
app.use(cors())
let port = process.env.PORT || 8080
//import fetch insert modules
let fetch = require("./fetch/fetch")
let insert = require("./insert/insert")
//use above modules
app.use("/fetch", fetch)
app.use("/insert", insert)
//assign port no
app.listen(port, () => {
    console.log("Server listening port no " + port)
})

/*
    >node server
    Test following URLs with postman
    http://localhost:8080/fetch  (get)
    http://localhost:8080/insert (post)
    body -> raw -> json
*/