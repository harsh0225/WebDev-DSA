const category = require('../models/category');

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

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
                message:"error in fetching category"
            })
        }
        res.status(200).json({
            success:true,
            message:"all tags return successfully",
            data:allCategory
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
        const selectedCourses = await category.findById(categoryId).populate({
            path: "course",
            match: { status: "Published" },
            populate: {
              path: "instructor",
          },
          })
        //validation
        if(!selectedCourses)
        {
            return res.status(404).json({
                success:false,
                message:"courses not found"
            })
        }
        
        //get courses different categories
        const categoriesExceptSelected = await category.find({
            _id: { $ne: categoryId },
          })
          .populate({
            path: "course",
            match: { status: "Published" },
            populate: {
              path: "instructor",
          },
          });

        let  differentCategory = categoriesExceptSelected.filter((category) => category.course.length > 0);
          differentCategory = differentCategory.map((category) => category.course)
          
        let newDiffer = [];
        for(let course of differentCategory)
        {
            if(course.length > 1)
            {
                for (const course1 of course) {
                        newDiffer.push(course1);
                }   
            }
            else
            {
                newDiffer.push(course[0]);
            }
        }
          


        //Get top-selling courses across all categories
		const allCategories = await category.find().populate("course").populate({
            path: "course",
            match: { status: "Published" },
            populate: {
              path: "instructor",
          },
          })
        var topSellingCourses ;
        if(allCategories.length !== 0)
        { 
            const allCourses = allCategories.flatMap((category) => category.course);

		    topSellingCourses = allCourses
			//.sort((a, b) => b.sold - a.sold)
			//.slice(0, 10);
        }



        // console.log(selectedCourses,'\n\n\n');
        // console.log(differentCourses,'\n\n\n')
        // console.log(topSellingCourses,'\n\n\n')
		res.status(200).json({ 
			selectedCategory: selectedCourses,
			differentCategory: newDiffer,
			topSellingCourses: topSellingCourses,
		});

    }
    catch(error){
        console.log(error.message)
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}