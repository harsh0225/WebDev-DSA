import React from 'react'
import { useSelector,useDispatch} from 'react-redux';
import {  useState } from 'react';
import {RxDropdownMenu} from 'react-icons/rx';
import {FiEdit2} from 'react-icons/fi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import {BiSolidDownArrow} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai';
import SubSectionModal from './SubSectionModal';
import ConfirmationModal from '../../../../Common/ConfirmationModal';
import { deleteSection, deleteSubSection } from '../../../../../services/operations/courseDetailsAPI';
import { setCourse } from '../../../../../Slices/courseSlice';

export const NestedView = ({handleChangeEditSectionName}) => {

    const {course} = useSelector((state) => state.course);
    const {token} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [addSubsection,setAddSubsection] = useState(null);
    const [viewSubsetion,setViewSubsection] = useState(null);
    const [editSubsection,setEditSubsection] = useState(null);

    const [confirmationModal,setConfirmationModal] = useState(null);

    const handleDeleteSection = async(sectionId) => {
        const result = await deleteSection({sectionId,CourseId:course._id},token);

        if(result)
        {
            dispatch(setCourse(result))
        }
        setConfirmationModal(null);

    }

    const handleDeleteSubSection = async(subSectionId ,sectionId)  => {
        const result = await deleteSubSection({subSectionId,sectionId,CourseId:course._id},token);
        setViewSubsection(null)
        setConfirmationModal(null);
        if(result)
        {
            dispatch(setCourse(result));
        }
    }   

    return ( 
    <div className='text-white'>
        <div   className="rounded-lg bg-richblack-700 p-6 px-8">
            {
                course?.courseContent.map((section) => {
                    return (
                        
                        <details key={section._id} className='mt-5'> 
                        <summary className="flex cursor-pointer items-center justify-between border-b-2 border-b-richblack-600 py-2">
                            <div className="flex items-center gap-x-3">
                                <RxDropdownMenu className="text-2xl text-richblack-50"/>
                                <p className="font-semibold text-richblack-50">{section.sectionName}</p>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <button onClick={() => handleChangeEditSectionName(section._id,section.sectionName)}> 
                                    <FiEdit2 className="text-xl text-richblack-300"/>
                                </button>

                                <button onClick={() => 
                                    setConfirmationModal({  
                                        text1:"Delete this section",
                                        text2:"All the lecture in this section is deleted",
                                        btn1Text:"Delete",
                                        btn2Text:"Cancel",
                                        btn1Handler : () => handleDeleteSection(section._id),
                                        btn2Handler: () => setConfirmationModal(null)
                                    })
                                }> 
                                    <RiDeleteBin6Line className="text-xl text-richblack-300"/>
                                </button>
                                <span className="font-medium text-richblack-300"> | </span>
                                <div>
                                    <BiSolidDownArrow  className={`text-xl text-richblack-300`}/>
                                </div>
                            </div>
                        </summary>

                        <div className="px-6 pb-4">
                                {
                                    section?.subsection.map((data) => {
                                        return (
                                            <div 
                                                onClick={() => setViewSubsection(data)}
                                                key={data?._id}
                                                className="flex cursor-pointer items-center justify-between gap-x-3 border-b-2 border-b-richblack-600 py-2"
                                            >
                                                <div className='flex items-center gap-x-3'>
                                                    <RxDropdownMenu   className="text-2xl text-richblack-50"/>
                                                    <p>{data?.title}</p>
                                                </div>

                                                <div    className="flex items-center gap-x-3"
                                                    onClick={(e) => e.stopPropagation()}
                                                >

                                                    <button 
                                                        className=''
                                                        onClick={() => setEditSubsection({...data,sectionId:section._id})}
                                                        >
                                                        <FiEdit2 className="text-xl text-richblack-300"/>
                                                    </button>
                                                    <button
                                                    onClick={() => {
                                                        setConfirmationModal({  
                                                            text1:"Delete this sub section",
                                                            text2:"selected lecture will be deleted",
                                                            btn1Text:"Delete",
                                                            btn2Text:"Cancel",
                                                            btn1Handler : () => handleDeleteSubSection(data._id,section._id),
                                                            btn2Handler: () => setConfirmationModal(null)
                                                        })
                                                    }}
                                                    >
                                                        <RiDeleteBin6Line className="text-xl text-richblack-300"/>
                                                    </button>
                                                    </div>
                                            </div>
                                        )
                                    })
                                }
                                
                        </div>
                        <button 
                                    onClick={() => setAddSubsection(section)}
                                    className="mt-3 flex items-center gap-x-1 text-yellow-50"
                                >
                                    <AiOutlinePlus/>
                                    <p>Add Lecture</p>
                                </button>
                    </details>)
                })
            }
            
        </div>

       {
        addSubsection ? (<SubSectionModal
            modalData={addSubsection}
            setmodalData={setAddSubsection}
            add={true}
            /> )
        : viewSubsetion ? (<SubSectionModal
            modalData={viewSubsetion}
            setmodalData={setViewSubsection}
            view={true}
            />) 
        : editSubsection ? (<SubSectionModal
            modalData={editSubsection}
            setmodalData={setEditSubsection}
            edit={true}
            />)
        :(<div> </div>) 
       }

       {
        confirmationModal ? (<ConfirmationModal modalData={confirmationModal}/>) : (<div></div>)
       }
    </div>  
  )
}
