const mongoose = require("mongoose");
const Schema = mongoose.Schema()

const contactSchema = ({

        firstName : String,
        lastName : String,
        phoneNumber : Number,
        email:{
            type :String,
            required : true,
        },
        Password:{
            type : String,
        },
        address:{
            city : String,
            code : Number,
        }
});
const Contact = mongoose.model("Contact",contactSchema);
module.exports = Contact;