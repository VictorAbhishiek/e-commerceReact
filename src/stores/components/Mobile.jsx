import React from "react";
import { mobileData } from "../data/mobiles";
const Mobile = () => {
    const firstFiveImages = mobileData.slice(0,5);
    return (  
    <>
        <h2>Mobile</h2>
            <div className="proSection">
                {
                    firstFiveImages.map((item)=>{
                        return(
                            <div className="imgbox">
                                <img  className = 'proImage' src={item.image} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
    </>
    );
}
 
export default Mobile;