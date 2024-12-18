import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const Cartprovider = ({children}) => {
    const [ cartItem, setCartItems] = useState([]);

    const addToCart = (item) =>{
        setCartItems([...cartItem, item]);
    };
    const removeFromCart = (item)=>{
        setCartItems(cartItem.filter((apple)=> apple !== item));
    };


    return(
        <CartContext.Provider value={{cartItem, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = ()=>{
    return useContext(CartContext);
};

// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const useCart = () => {
//   return useContext(CartContext);
// };

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     // Check if the item already exists in the cart
//     const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
//     if (existingItem) {
//       // Update quantity or show a message if the item is already in the cart
//       setCartItems(
//         cartItems.map(cartItem => 
//           cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (item) => {
//     setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
