import React, { useEffect, useState } from 'react'
import { CourseSlider } from '../Components/core/Catalog/CourseSlider'
import { FooterForAll } from '../Components/Common/FooterForAll'
import { useParams } from 'react-router-dom'
import { catalogData, categories } from '../services/apis'
import { apiConnector } from '../services/apiconnector'
import { getCatalogPageData } from '../services/operations/PageAndComponentData'
import { Course_Card } from '../Components/core/Catalog/Course_Card'

export const Catalog = () => {


    const {catalogName} = useParams();
    const [catalogPageData,setCatalogPageData] = useState(null);
    const [categoryId,setCateghoryId] = useState(); 
    const [active, setActive] = useState(1)

    //fetch all category
    useEffect(() => {
        const getCategory = async() => {
            const res = await apiConnector('GET',categories.CATEGORIES_API);
            const categoryId1 = res?.data?.data?.filter((ct) => ct.name?.split(" ")?.join('-')?.toLowerCase() === catalogName)[0]._id
            setCateghoryId(categoryId1);
        }
        getCategory();
    },[catalogName]);

    useEffect(() => { 
        const getCategoryDetails = async() => {
            try{
                const res = await getCatalogPageData(categoryId);
                setCatalogPageData(res);
            }
           catch(error)
            {
                console.log(error.message);
            }
        }
        getCategoryDetails();
    },[categoryId]);


  return (
    <div className=" box-content bg-richblack-800 px-4">
        <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
            <p className="text-sm text-richblack-300">{`home / catalog / `}
                <span className="text-yellow-25">{catalogPageData?.selectedCategory?.name}</span>
            </p> 
            <p className="text-3xl text-richblack-5">{catalogPageData?.selectedCategory?.name}</p>
            <p className="max-w-[870px] text-richblack-200">{catalogPageData?.selectedCategory?.description}</p>
        </div>
        <div>
            {/* section 1*/}
            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent"> 
                <div className="text-3xl text-richblack-5">Course To Get You Start</div>
                <div className="my-4 flex border-b border-b-richblack-600 text-sm">
                    <p
                    className={`px-4 py-2 ${
                        active === 1
                          ? "border-b border-b-yellow-25 text-yellow-25"
                          : "text-richblack-50"
                      } cursor-pointer`}
                      onClick={() => setActive(1)}
                    
                    >Most Popular</p>
                    <p
                    className={`px-4 py-2 ${
                        active === 2
                          ? "border-b border-b-yellow-25 text-yellow-25"
                          : "text-richblack-50"
                      } cursor-pointer`}
                      onClick={() => setActive(2)}
                    >new</p>
                </div>
                <div>
                        <CourseSlider Courses={catalogPageData?.selectedCategory?.course}/>
                </div>
            </div>
            {/* section 2*/}
            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
                <p className="text-3xl text-richblack-5"> Top Courses</p>
                <div>
                    <CourseSlider Courses={catalogPageData?.differentCategory}/>
                </div>
            </div>

            {/* section 2*/}
            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
                <p className="text-3xl text-richblack-5">Frequently bought</p>
                <div className='py-8'>
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {
                        catalogPageData?.topSellingCourses?.slice(0,4)
                        .map((course,index) => {
                           return (
                            <Course_Card
                            course={course} key={index} Height={"h-[400px] "}
                        />
                           )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        <FooterForAll/>
    </div>
  )
}
