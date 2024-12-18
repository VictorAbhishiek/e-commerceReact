import React from "react";
import { mobileData } from "../stores/data/mobiles";
import { useParams } from "react-router-dom";
import Navbar from "../stores/components/Navbar";

import { useCart } from "../context/Cartcontext";
const Mobilesingle = () => {
    const {id} = useParams();
    const {addToCart, cartItem} = useCart()
    const product = mobileData.find((item) => item.id === id);
    return ( 
    <>
    <Navbar />
        <div className="ind-page">
            <div className="ind-img">
                <img src={product.image} alt="" />
            </div>
            <div className="ind-details space">
                <div className="ind-company">
                    <h2>{product.company}</h2>
                </div>
            <div className="ind-model space">
                <h3>{product.model}</h3>
            </div>
            <div className="ind-price space">
                <h2>{product.price}</h2>
            </div>
            <div className="ind-desc space">
                <p>
                    {product.description}
                </p>
            </div>
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    </>
     );
}
 
export default Mobilesingle;