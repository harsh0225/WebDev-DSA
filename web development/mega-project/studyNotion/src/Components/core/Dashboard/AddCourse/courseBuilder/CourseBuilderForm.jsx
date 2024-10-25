import React, { useState } from 'react'
import {useForm} from 'react-hook-form';
import { IconButton } from '../../../../Common/IconButton';
import {IoMdAddCircleOutline} from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import {GrFormNext} from 'react-icons/gr';
import { setStep ,setEditCourse, setCourse} from '../../../../../Slices/courseSlice';
import { toast } from 'react-hot-toast';
import { updateSection,createSection } from '../../../../../services/operations/courseDetailsAPI';
import { NestedView } from './NestedView';

  
export const CourseBuilderForm = () => {

  const {
    register,
    handleSubmit,
    setValue,
    formState:errors} = useForm(); 


    const dispatch = useDispatch();
   
    const {course} = useSelector((state) => state.course);

    const [editSectionName,setEditSectionName] = useState(null);
    
    const [loading,setLoading] = useState(false);

    const {token} = useSelector((state) => state.auth);


    const cancelEdit = () => {
      setEditSectionName(null);
      setValue("sectionName","")
    }


    const goBack = () => {
      dispatch(setEditCourse(true));
      dispatch(setStep(1));

    }

    const goToNext = () => {
        if(course.courseContent.length === 0) {
          toast.error("please add atleast one section");
          return ;
        }
        //if(course?.courseContent?.some((section) => section.subsection.length) === 0)
        if(course?.courseContent?.some((section) => section.subsection.length === 0))
        {
          toast.error("please add atleast one lecture");
          return 
        }

        dispatch(setStep(3));
    }


    const onsubmit = async(data) => { 
      let result = null;
      if(editSectionName)
      {
        //we are editing the section name
        result = await updateSection(
          {
            newSectionName:data.sectionName,
            sectionId:editSectionName,
            courseId:course._id,
          },
          token          
        )
      }
      else
      {
        console.log(course._id)
        
       result = await createSection( 
          {
            sectionName:data.sectionName,
            CourseID:course._id
          },
          token
        )
      }
 
      //update values

      if(result)
      {
        dispatch(setCourse(result));
        setEditSectionName(null);
        setValue("sectionName","");
      }
      //loading false
      setLoading(false);
    }

    const handleChangeEditSectionName = (sectionId,sectionName) => {
      console.log("aa gaye")
      if(editSectionName === sectionId)
      {
        cancelEdit();
      }
      else
      {
        setEditSectionName(sectionId);
        setValue("sectionName",sectionName); 
      }
  
    }

  return (
    <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
      <p className="text-2xl font-semibold text-richblack-5">Course Builder</p>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
        <div className="flex flex-col space-y-2">
          <label  className="text-sm text-richblack-5">Section name <sup className="text-pink-200">*</sup></label>
          <input
            id="sectionName"
            placeholder='Add Section Name'
            {...register("sectionName",{required:true})}
            className='bg-richblack-900 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] w-full'
          />
          {
            errors.sectionName && 
            <span  className="ml-2 text-xs tracking-wide text-pink-200">Section name is required</span>
          }
        </div>
        <div className="flex items-end gap-x-4">
          <IconButton
          type="submit"
          text={editSectionName ? "Edit Section Name" : "Create Section"}
          outline={true}
          customClasses="flex flex-row"
          >
            <IoMdAddCircleOutline  className="text-yellow-50"/>
          </IconButton>

          {
            editSectionName && (
              <button type="button"
                onClick={cancelEdit}
                className="text-sm text-richblack-300 underline"
              >
                cancel edit
              </button>
            )
          }
         </div>
      </form>
      
      {
        course?.courseContent?.length > 0 && (
          <NestedView
            handleChangeEditSectionName = {handleChangeEditSectionName}
          />
        )
      }

      <div className='flex justify-end gap-x-3'>
        <button onClick={goBack}  className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}>
          Back
        </button>
        <IconButton
          text={"Next"} 
         onclick={goToNext}
        >
          <GrFormNext/>
        </IconButton>
      </div>


      
    </div>
  )
}
