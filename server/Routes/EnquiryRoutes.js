let express=require("express");
const { enquiryInsert} = require("../DataFolder/UserEnquiryFolder");



let enquiryRoutes=express.Router();
enquiryRoutes.post("/enquiry-insert",enquiryInsert);

module.exports={enquiryRoutes};