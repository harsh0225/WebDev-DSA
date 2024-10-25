const contactUs = require('../models/contactUs');

exports.contactUs = async(req,res) => {

    try{
        const {firstName,lastName,email,phoneNo,message,countryCode} = req.body;
        
        if(!firstName || !lastName || !email || !phoneNo || !message || !countryCode)
        {
            return res.status(404).json({
                success:false,
                message:"data is invaild"
            })
        }

        const createdContactUs = await contactUs.create({firstName,lastName,email,phoneNo,message,countryCode});

        console.log(createdContactUs);
        res.status(200).json({
            success:true,
            message:"DB entry successfull"
        })

    }
    catch(error)
    {
        return res.status(404).json({
            success:false,
            message:"error in contactUs Controller",
            error:error.message
        })
    }
}