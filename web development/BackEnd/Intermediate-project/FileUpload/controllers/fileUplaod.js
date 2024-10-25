const File = require("../models/File");
const cloudinary = require("cloudinary").v2; 

exports.localFileUpload = async(req,res) => {
    try{
        // fetch file from request
        const file = req.files.file;
        console.log("request files -> ",file);

        //create path where file needs to store to store request file
        let path = __dirname + "/fileupload/" + Date.now() +`.${file.name.split(".").at(1)}`;
        console.log(path);

        //add path to move function
        file.mv(path,(error) => {
            console.log(error);
        })

        //create successfull syntax
        res.json({
            success:true,
            message:"local file uploaded successfully"
        })
    }
    catch(error){
        console.log("error in controller")
        console.log(error)
    }
}

//image upload handler

function isFileTypeSupported(supportedType,extension){
    return supportedType.includes(extension);
}

const uploadFileToCloudinary = async(file,folder,quality) => {
    try{
        const options = {folder};
        options.resource_type = "auto";

        if(quality){
            options.quality = quality
        }

        return await cloudinary.uploader.upload(file.tempFilePath,options);

    }
    catch(error){ 

    }
}



exports.imageUpload = async(req,res) => {
    try{    
        // fetch data from request
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log("aa gaye")

        //validation
        const supportedType = ["jpg","jpeg","png"];
        const extension = file.name.split(".").at(1).toLowerCase();
        console.log(extension);
        if(!isFileTypeSupported(supportedType,extension))
        {
            return res.status(400).json({
                success:false,
                message:"file format is not supported"
            })
        }

        //if file format supported then
        const response = await uploadFileToCloudinary(file,"harsh");
        console.log(response);


        //create entry in database
        const fileData = await File.create({
            name,
            tags,
            email,
            url:response.secure_url
        });

        //send response 

        res.status(200).json({
            success:true,
            message:"image upload successfully",
            data:fileData
        })


    }
    catch(error)
    {
       // console.error(error);
        res.status(404).json({
            success:false,
            message:"something went wrong image upload"
        })
    }
}


//video upload handler

exports.videoUpload = async(req,res) => {
    try{
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.videoFile;
        console.log(file);

        //validation
        const supportedType = ["mp4","mov"];
        const extension = file.name.split(".").at(1).toLowerCase();
        console.log(extension);


        // set video limit less than  5mb
        if(file.size > 50000000)
        {
            res.status(300).json({
                success:false,
                message:"file size is exceeded" 
            })
        }

        if(!isFileTypeSupported(supportedType,extension))
        {
            return res.status(400).json({
                success:false,
                message:"file format is not supportes"
            })
        }

        //if file format supported then
        const response = await uploadFileToCloudinary(file,"harsh");
        console.log(response);

        //create entry in database
        const fileData = await File.create({
            name,
            tags,
            email,
            url:response.secure_url
        });

        //send response 

        res.status(200).json({
            success:true,
            message:"video upload successfully",
            data:fileData
        })


    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"something went wrong video upload"
        })
    }
}


//image sizeReducer

exports.imageReduceUpload = async(req,res) => {
    try{
        // fetch data from request
        const {name,tags,email} = req.body;
        console.log(name,tags,email);

        const file = req.files.imageFile;
        console.log(file);

        //validation
        const supportedType = ["jpg","jpeg","png"];
        const extension = file.name.split(".").at(1).toLowerCase();
        console.log(extension);

        if(!isFileTypeSupported(supportedType,extension))
        {
            return res.status(400).json({
                success:false,
                message:"file format is not supportes"
            })
        }

        //if file format supported then
        const response = await uploadFileToCloudinary(file,"harsh",100);
        console.log(response);


        //create entry in database
        const fileData = await File.create({
            name,
            tags,
            email,
            url:response.secure_url
        });

        //send response 

        res.status(200).json({
            success:true,
            message:"image upload successfully",
            data:fileData
        })
         
    }
    catch(error){
        res.status(404).json({
            success:false,
            message:"something went wrong imageSizeReducer image"
        })
    }       
}