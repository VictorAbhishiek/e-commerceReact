import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Cartcontext";
// const Navbar = () => {

//     const {cartItems} = useCart()
//     return ( 
//     <>
//         <div className="navSection">
//             <div className="title">
//                 <h2>E-Mart</h2>
//             </div>
//             <div className="search">
//                 <input type="text" placeholder="Search..." />
//             </div>
//             <div className="user">
//                 <div className="user-details">SignIn/SignUp</div>
//                 <Link to= '/cart'><div className="cart">Cart 
//                     <span>
//                         {cartItems.length}
//                     </span>
//                     </div></Link>
//             </div>
//         </div>
//         <div className="submenu">
//             <ul>
//                 <Link to = '/mobile'><li>Mobile</li></Link>
//                 <Link to = '/computer'><li>Computer</li></Link>
//                 <Link to = '/watches'><li>Watches</li></Link>
//                 <Link to = '/books'><li>Books</li></Link>
//                 <Link to = '/furnitures'><li>Furniture</li></Link>
//                 <Link to = '/ac'><li>AC</li></Link>
//                 <Link to = '/fridge'><li>Fridge</li></Link>
//                 <Link to = '/kitchen '><li>Kitchen</li></Link>
//                 <Link to = '/mens'><li>Men's Fashion</li></Link>
//                 <Link to = '/women'><li>women Dress</li></Link>
//                 <Link to = '/tv'><li>TV</li></Link>
//                 <Link to = '/speakers'><li>Speaker</li></Link>
//             </ul>
//         </div>
//     </>
//     );
// };
 
// export default Navbar;


const Navbar = () => {

    const {cartItem }= useCart()
  
    return (
      <div className="navbar-section">
        <div className="navSection">
          <Link to='/' className="custom-link">
            <div className="title"><h2>E-Mart</h2></div>
          </Link>
            <div className="search"><input type="text" placeholder="Search..." /></div>
            { <div className="user">
             <Link to = '/login'><div className="user-detail">SignIN/SignUp</div></Link>
            </div> }
              <Link to= '/cart'>
                  <div className="cart">
                      <span> Cart:
                        {cartItem.length}
                      </span> 
                  </div>
              </Link>
        </div>
        <div className="subMenu">
          <ul>
            <Link to="/mobiles" className="custom-link">
              <li>Mobiles</li>
            </Link>
  
            <Link to="/computers" className="custom-link">
              <li>Computers</li>
            </Link>
  
            <Link to="/watch" className="custom-link">
              <li>Watches</li>
            </Link>
  
            <Link to="/men" className="custom-link">
              <li>Mens Wear</li>
            </Link>
  
            <Link to="/woman" className="custom-link">
              <li>Woman Wear</li>
            </Link>
  
            <Link to="/furniture" className="custom-link">
              <li>Furniture</li>
            </Link>
  
            <Link to="/kitchen" className="custom-link">
              <li>Kitchen</li>
            </Link>
  
            <Link to="/fridge" className="custom-link">
              <li>Fridge</li>
            </Link>
            {/* <Link to="/" className="custom-link">
              <li>Books</li>
            </Link> */}
  
            {/* <Link to="/" className="custom-link">
              <li>Speakers</li>
            </Link> */}
  
            {/* <Link to="/" className="custom-link">
              <li>TV's</li>
            </Link> */}
  
            <Link to="/ac" className="custom-link">
              <li>AC</li>
            </Link>
          </ul>
        </div>
      </div >
    );
  };
  
  export default Navbar;