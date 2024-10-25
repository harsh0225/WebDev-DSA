import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Labs = () => {

    const navigate = useNavigate();
    function clickHandler()
    {
        //move to support page;
        navigate("/support");
    }

  return (
    <div>
        <div>This is lab page</div>
        <button onClick={clickHandler}>goto support</button>
    </div>
  )
}
