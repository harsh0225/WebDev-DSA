import React, { useEffect, useState } from 'react'
import {useDispatch ,useSelector} from 'react-redux'; 
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { RenderSteps } from '../AddCourse/RenderSteps';
import { getFullDetailsOfCourse } from '../../../../services/operations/courseDetailsAPI';
import { setCourse, setEditCourse } from '../../../../Slices/courseSlice';

export const EditCourse = () => {

    const dispatch = useDispatch();
    const {courseId} = useParams();
    const {course} = useSelector((state) => state.course);
    const {token} = useSelector((state) => state.auth); 
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const populateCourseDetails = async() => {
            setLoading(true);
            const result = await getFullDetailsOfCourse(courseId,token);
            console.log(result);
            if(result) 
            {
                dispatch(setCourse(result?.courseDetails));
                dispatch(setEditCourse(true)); 
            }
        }
        populateCourseDetails();
    },[])

  return (
    <div>
        <h1>Edit Course</h1>
        <div>
            {
                course 
                ?
                (<RenderSteps/>) 
                : 
                (<div>
                    Course Not Found 
                </div>)
            }
        </div>
    </div>
  )
}
 