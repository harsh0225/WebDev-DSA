import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import {editCourseDetails, fetchCourseCategories ,addCourseDetails} from '../../../../../services/operations/courseDetailsAPI';
import { ChipInput } from './ChipInput';
import {RequirementField} from './RequirementField'
import {setCourse, setStep} from '../../../../../Slices/courseSlice';
import {IconButton} from '../../../../Common/IconButton';
import toast from 'react-hot-toast';
import {HiOutlineCurrencyRupee} from 'react-icons/hi'    
import Upload from '../upload';
import { COURSE_STATUS } from '../../../../../utils/constants';

export const CourseInformationForm = () => {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors},
    } = useForm();

    const dispatch = useDispatch();
    const {course,editCourse} = useSelector((state) => state.course);
    const [loading,setLoading] = useState(false);
    const [courseCategories,setCourseCategories] = useState([]);
    const {token} = useSelector((state) => state.auth);

    const getCategories = async() => {
      setLoading(true);
      const categories = await fetchCourseCategories();
      if(categories.length > 0)
      {
        setCourseCategories(categories);
      }
      setLoading(false);
    }

    const isFormUpdated = () => {
      const currentValues = getValues();
      if(currentValues.courseTitle !== course.courseName || currentValues.courseShortDesc !== course.courseDescription
         || currentValues.coursePrice !== course.price || currentValues.courseBenifits !== course.whatYouWillLearn 
         || currentValues.courseBenifits !== course.whatYouWillLearn || currentValues.courseCategory._id !== course.category._id
         || currentValues.courseRequirements !== course.instructions )
      {
        return true;
      }
      else
      {
        return false;
      }
    }



    //handle next click button
    const onSubmit = async(data) => {

      if(editCourse)
      {
        const currentValues = getValues();
        const formData = new FormData();
        if(isFormUpdated())
        {

          formData.append("courseId" ,course._id);
          if(currentValues.courseTitle !== course.courseName)
          {
            formData.append("courseName" ,data.courseTitle)
          } 
          if(currentValues.courseShortDesc !== course.courseDescription)
          {
            formData.append("description" ,data.courseShortDesc)
          }
          if(currentValues.coursePrice !== course.price)
          {
            formData.append("price" ,data.coursePrice)
          }
          if(currentValues.courseCategory._id !== course.category._id)
          {
            formData.append("category" ,data.courseCategory)
          }
          if(currentValues.courseRequirements.toString() !== course.instructions.toString()) 
          {
            formData.append("instructions", JSON.stringify(data.courseRequirements));
            console.log( "prinitng course instructions" +JSON.stringify(data.courseRequirements))
          }
          if(currentValues.courseImage !== course.thumbnail)
          {
            formData.append("thumbnailImage" ,data.courseImage)
          }
          if(currentValues.courseBenifits !== course.whatYouWillLearn)
          {
            formData.append("whatYouWillLearn" ,data.courseBenifits)
          }

          setLoading(true);
          const result = await editCourseDetails(formData,token);
          setLoading(false);
 
          if(result)
          {
            setStep(2);
            dispatch(setCourse(result));
          }
        }
        else
        {
          toast.error("No Changes Made So Far")
        }
      }
      else
      {
        const formData = new FormData();
        formData.append("courseName" ,data.courseTitle);
        formData.append("description" ,data.courseShortDesc);
        formData.append("price" ,data.coursePrice);
        formData.append("category" ,data.courseCategory);
        formData.append("instructions", JSON.stringify(data.courseRequirements));
        formData.append("thumbnailImage" ,data.courseImage);
        formData.append("whatYouWillLearn" ,data.courseBenifits);
        formData.append("status", COURSE_STATUS.DRAFT)
        console.log("PRINTING FORMDATA", formData);
        

        setLoading(true);
        console.log("BEFORE add course API call");
        console.log("PRINTING FORMDATA", formData);
        const result = await addCourseDetails(formData,token);
       
        if(result) {
            dispatch(setStep(2));
            dispatch(setCourse(result));
        }
        setLoading(false);
        console.log("PRINTING FORMDATA", formData);
        console.log("PRINTING result", result);
      }

    }



    useEffect(()=>{
        
      getCategories();
      
      if(editCourse)
      {
        setValue("courseTitle",course.courseName);
        setValue("courseShortDesc",course.description);
        setValue("coursePrice",course.price);
        setValue("courseTags",course.tag);
        setValue("courseBenifits",course.whatYouWillLearn);
        setValue("courseCategory",course.category._id);
        setValue("courseRequirements",course.instructions);
        setValue("courseImage",course.thumbnail);
      }

      

    },[]);    

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}  className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
        <div>
          <label htmlFor='courseTitle' >Course Title<sup className="text-pink-200">*</sup></label>
          <input
            id='courseTitle'
            placeholder='enter course title'
            {...register("courseTitle",{require:true})}
            className='bg-richblack-900 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] w-full'
          />
          {
            errors.courseTitle && (
              <span className="ml-2 text-xs tracking-wide text-pink-200">Course title is required</span>
            )
          }
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor='courseShortDesc'  className="text-sm text-richblack-5">course Short Description<sup className="text-pink-200">*</sup></label>
          <textarea id="courseShortDesc"
            placeholder='Enter Description'
            {...register("courseShortDesc",{required:true})}
            className='bg-richblack-900 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] w-full form-style resize-x-none min-h-[130px]'
          ></textarea>
            {
              errors.courseShortDesc && 
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                  course Description is Required
                </span>
            }
        </div>

        <div className='relative flex flex-col space-y-2 pb-[20px]'>
          <label  htmlFor='coursePrice'  className="text-sm text-richblack-5">enter course price<sup className="text-pink-200">*</sup></label>
          <input
            id='coursePrice'
            placeholder=' enter course price'
            {...register("coursePrice",{require:true,valueAsNumber:true})}
            className='bg-richblack-900 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] w-full pl-[40px]'
          c
          />
          <HiOutlineCurrencyRupee className="absolute left-3 top-[45px] inline-block -translate-y-1/2 text-2xl text-richblack-400"/>
            {
              errors.coursePrice && 
                <span className="ml-2 text-xs tracking-wide text-pink-200">
                  course price is Required
                </span>
            }
        </div>
          
        <div className="flex flex-col space-y-2 pb-[20px]">
            <label  htmlFor='courseCategory' className="text-sm text-richblack-5">Course category <sup className="text-pink-200">*</sup></label>
            <select 
              id="courseCategory"
              defaultValue=""
              {...register("courseCategory",{required:true})}
              className='bg-richblack-900 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] w-full'
            >
            <option value={""} disabled> choose a category</option>
            {
              !loading && 
              courseCategories.map((category,index) => {
                return(
                  <option key={index} value={category?.id}>
                    {category?.name}
                  </option>
                )
              })
            }
            </select>
            {
              errors.courseCategories && (
                <span className="ml-2 text-xs tracking-wide text-pink-200">course category is required</span>
              )
            }
        </div>
        <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
        />

        {/* create a custom componenets for handling tags input */}
        {/*<ChipInput
            label="Tags"
            name="courseTags"
            placeholder="Enter tags and press enter "
            register = {register}
            error={errors}
            setValue={setValue}
            getValues={getValues}
          />*/}

          {/* benifits of the course */}
          
          <div className="flex flex-col space-y-2 pt-[30px]">
              <lable className="text-sm text-richblack-5" htmlFor="courseBenefits">Benifits of the course</lable>

              <textarea 
              id="courseBenifits" 
              placeholder='enter benifits of course'
              {...register('courseBenifits',{required:true })}
              className='bg-richblack-900 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] w-full form-style resize-x-none min-h-[130px]'
              >
              </textarea>
              {
                errors.courseBenifits && 
                <span className="ml-2 text-xs tracking-wide text-pink-200"> Benifits of course is required</span>
              }
          </div>

          <RequirementField
              name="courseRequirements"
              label="Requirements/Instructions" 
              errors={errors}
              setValue={setValue}
              getValues={getValues}
              register={register}
          />
          <div className="flex justify-end gap-x-2">
          {
            editCourse && (
              <button
              onClick={() => dispatch(setStep(2))}
              className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
              >
                continue without saving
              </button>
            )  
            
          }
            <IconButton
              text={!editCourse ? "Next" : "Save Changes"}
            />
          </div>
      </form>
    </div>  
  )
}
