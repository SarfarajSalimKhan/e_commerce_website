//import modules
let express = require('express')
let mongodb = require('mongodb')
//create mongo client
let mongo_client = mongodb.MongoClient
//create router instance
let router = express.Router()
//import url
let url = require("../url")
//create rest api
router.post("/", (request, response) => {
    let first_name = request.body.first_name
    let last_name = request.body.last_name
    let username = request.body.username
    let mobile_number = request.body.mobile_number
    let email = request.body.email
    let password = request.body.password
    let data = {
        "first_name": first_name,
        "last_name": last_name,
        "username": username,
        "mobile_number": mobile_number,
        "email": email,
        "password": password
    }
    mongo_client.connect(url, (error, connection) => {
        if (error)
            console.log("Error in connection: ", error)
        else {
            let database = connection.db("e_commerce_website")
            database.collection("users").insertOne(data, (error) => {
                if (error)
                    response.json({"insert": "failed"})
                else {
                    console.log("Data inserted")
                    response.send("<h1 style='color: green'>You are successfully signed up.</h1>")
                }
            })
        }
    })
})
//export router
module.exports = router