const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PublicCommunitySchema =new Schema({
user : {
    type : String
},
message : {
    type : String
}
})

module.exports=PublicCommunity=mongoose.model("PublicCommunity",PublicCommunitySchema)