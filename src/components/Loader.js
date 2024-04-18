import React from "react";
import Load from "../Images/Hourglass.gif";
const Loader=()=>{
    return(
        <>
        <div className="d-flex align-center" style={{height:"90vh"}}>
            <img src={Load} alt="" />
        </div>
        </>
    )
}
export default Loader;