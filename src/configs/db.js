const mongoose = require("mongoose");
require('dotenv').config();

const connect = () => {

    return mongoose.connect("mongodb+srv://dipak:dushing14@entitylisting.pyzjw.mongodb.net/entitylisting?retryWrites=true&w=majority");
}
module.exports = connect