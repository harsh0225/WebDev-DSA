import React, { useEffect, useState } from 'react'

export const RequirementField = ({name,label,register,setValue,errors,getValues}) => {

    const [requirements,setRequirements] = useState("");
    const [requirementList,setRequirementList] = useState([]);

    function handleAddRequirement()
    {
        if(requirements)
        {
            setRequirementList([...requirementList,requirements]);
            setRequirements(""); 
        }
    }

    function handleRemoveRequirements(index)
    {
        const updatedRequirementList = [...requirementList];
        updatedRequirementList.splice(index,1);
        setRequirementList(updatedRequirementList);
    }

    useEffect(() => {
        register(name,{
            required:true,
        })
        if(getValues(name))
        {
            setRequirementList(getValues(name));
        }
    },[]);

    useEffect(() => {
        setValue(name,requirementList);
    },[requirementList])

  return (
    <div  className="flex flex-col space-y-2">
        <label htmlFor={name} className="text-sm text-richblack-5">{label}</label>
        <div className="flex flex-col items-start space-y-2">
            <input
            type="text"
            id={name}
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            placeholder='Enter requirements/instruction'
            className='bg-richblack-900 rounded-[0.5rem] text-richblack-5 p-[12px] border-b-[1px] w-full'
            />

            <button type='button' onClick={handleAddRequirement}  className="font-semibold text-yellow-50">Add</button>
        </div>
        <div>
            {
                requirementList.length > 0 
                ? 
                (
                    <ul className="mt-2 list-inside list-disc">
                      
                            {
                                requirementList.map((requirement,index) => {
                                    return (
                                        <li  className="flex items-center text-richblack-5" key={index}>
                                            <span>{requirement}</span>
                                            <button type='button' onClick={() => handleRemoveRequirements(index)} 
                                            className="ml-2 text-xs text-pure-greys-300 "
                                            >clear</button>
                                        </li>
                                    )
                                })
                            }
                            
                            {
                                errors[name] && (
                                    <span className="ml-2 text-xs tracking-wide text-pink-200">
                                    {label } is required
                                    </span>
                                )
                            }
                            
                 
                    </ul>
                )
                :
                (
                    <div>

                    </div>
                )
            }
        </div>
    </div>
  )
}
