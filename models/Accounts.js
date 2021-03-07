const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AccountsSchema =new Schema({
firstname :{
    type : String
},
lastname : {
    type : String
},
email :{
    type: String
},
password:{
    type : String
},
region : {
    type :String
},
acctype : {
    type : String
}
})

module.exports=Accounts=mongoose.model("Accounts",AccountsSchema)