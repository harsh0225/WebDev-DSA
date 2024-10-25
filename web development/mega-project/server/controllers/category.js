const category = require('../models/category');


//create tag ka handler function

exports.createCategory= async(req,res) => {
    try{
        //fetch data from request body

        const {name,description} = req.body;

        //validation of data

        if(!name || !description)
        {
            return res.status(401).json({
                success:false,
                message:"data is not valid all field are require"
            })
        }

        //check tag is already exist
        const categoryExist = await category.findOne({name:name});
        if(categoryExist)
        {
            return res.status(401).json({
                success:false,
                message:"tag is already present in database"
            })
        }

        //create entry in database

        const dbEntry = await category.create({name,description});
        console.log(dbEntry);

        res.status(200).json({
            success:true,
            message:"category entry created successfully"
        }) 

    }
    catch(error)
    {
        console.log(error)
        res.status(401).json({
            success:false,
            message:error.message
        });
    }
}

//get all tags

exports.showAllCategory = async(req,res) => {
    try{
        const allCategory = await category.find({},{name:true,description:true});
        if(!allCategory)
        {
            res.status(401).json({
                success:false,
                message:"error in fetching tags"
            })
        }
        res.status(200).json({
            success:true,
            message:"all tags return successfully",
            allCategory
        });
    }
    catch(error)
    {
        console.log(error)
        res.status(401).json({
            success:false,
            message:error.message
        });
    }
}

//category page details

exports.categoryPageDetails = async(req,res) => {
    try{
        //get category id
        const {categoryId} = req.body;

        //data validation
        if(!categoryId)
        {
            return res.status(404).json({
                success:false,
                message:"data is invalid"
            })
        }

        //get courses for specified category id
        const selectedCourses = await category.findById(categoryId).populate("course");

        //validation
        if(!selectedCourses)
        {
            return res.status(404).json({
                success:false,
                message:"courses not found"
            })
        }
        
        //get courses different categories
        const differentCourses = await category.find(
            {_id:
                {
                    $ne:categoryId
                }
            })
        .populate("course")
        .exec();

        // Get top-selling courses across all categories
		// const allCategories = await category.find().populate("courses");
        // if(allCategories.length !== 0)
        // {
        //     const allCourses = allCategories.flatMap((category) => category.courses);
		//     const topSellingCourses = allCourses
		// 	.sort((a, b) => b.sold - a.sold)
		// 	.slice(0, 10);
        // }


		res.status(200).json({
			selectedCourses: selectedCourses,
			// differentCourses: differentCourses,
			// topSellingCourses: topSellingCourses,
		});

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}