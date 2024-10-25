require("dotenv").config();          //This line simply means importing environment variables
const Cloudinary = require('cloudinary').v2;

exports.clodinaryConnect = async() => {
    try{
            Cloudinary.config({
            cloud_name:process.env.CLOUDE_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET
            });
            console.log("cloudinary connection successful");
    }
    catch(error){
        console.log("error in cloudinary connection");
    }
}