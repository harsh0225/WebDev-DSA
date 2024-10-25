import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Support = () => {

    const navigate = useNavigate();
    function goBack()
    {
        navigate(-1);
    }

  return (
   <div>
        <div>This is support page</div>
        <button onClick={goBack}>go Back</button>
   </div>
  )
}
