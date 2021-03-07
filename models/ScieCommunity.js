const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ScieCommunitySchema =new Schema({
user : {
    type : String
},
message : {
    type : String
}
})

module.exports=ScieCommunity=mongoose.model("ScieCommunity",ScieCommunitySchema)