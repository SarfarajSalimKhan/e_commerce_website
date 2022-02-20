//import jwt-simple module
let jwt_simple = require("jwt-simple")
module.exports = function (data, token) {
    return jwt_simple.encode(data, token)
}