//import modules
let express = require("express")
let mongodb = require("mongodb")
//create mongo client
let mongo_client = mongodb.MongoClient
//create router instance
let router = express.Router()
//import url
let url = require("../url")
//create rest api
router.get("/", (request, response) => {
    let email = request.query.email
    let password = request.query.password
    let data = {
        "email": email,
        "password": password
    }
    mongo_client.connect(url, (error, connection) => {
        if (error)
            console.log("Error in connection: ", error)
        else {
            let database = connection.db("e_commerce_website")
            database.collection("users").find(data).toArray((error, array) => {
                if (error)
                    console.log("Error while fetching data: ", error)
                else {
                    console.log("Data sent")
                    if (array.length == 0) {
                        response.send("<h1 style='color: red'>Invalid credentials.</h1>")
                    }
                    else
                        response.send("<h1 style='color: green'>Login successful.</h1>")
                }
            })
        }
    })
})
router.post("/authUser", (request, response) => {
    let email = request.body.email
    let password = request.body.password
    let data = {
        "email": email,
        "password": password
    }
    mongo_client.connect(url, (error, connection) => {
        if (error)
            console.log("Error in connection: ", error)
        else {
            let database = connection.db("e_commerce_website")
            database.collection("users").find(data).toArray((error, array) => {
                if (error)
                    console.log("Error while fetching data: ", error)
                else {
                    if (array.length == 0)
                        response.json({"authentication": "failed"})
                    else {
                        let token = require("../token/token") (data, JSON.stringify(Date.now()))
                        database.collection("tokens").insertOne({"token": token}, (error) => {
                            console.log(error)
                        })
                        response.json({"authentication": "success", "token": token, "email": email})
                    }
                }
            })
        }
    })
})
//export router
module.exports = router
