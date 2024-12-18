import React from "react";
import { menData } from "../data/men";
const Men = () => {
    const firstFiveImages = menData.slice(0,5);
    return ( 
        <>
        <h2>Men's fashion </h2>
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
 
export default Men;