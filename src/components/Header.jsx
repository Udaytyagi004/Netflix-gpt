import { Netflix_Logo } from "../utils/constants";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase"; 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearch } from "../utils/gptSlice";    



const Header = () =>{
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleSignOut = ( )=>{
       signOut(auth).then(() => {
          // Sign-out successful.
          
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        
    });

    };

    const handleGptSearch = () =>{
        dispatch(toggleGptSearch())

    }

    return(
        <div className="flex justify-between p-2 font-bold text-lg  text-white relative z-10"> 
            <ul className="flex items-center ">
                <li className="m-2"><img src={Netflix_Logo}  width={150}/></li>
                <li className="m-3 ml-6">Home</li>
                <li className="m-3">TV shows</li>
                <li className="m-3">Movies</li>
               
                <li className="m-3">My List</li>

            </ul>
            <ul className="flex items-center">
                <li className="m-4 " onClick={()=>{handleGptSearch()}}><FaSearch /></li>
                <li className="m-4">Children</li>
                <li className="m-4  text-2xl"><IoNotifications /></li>
                <li className="m-4  flex  justify-center items-center text-xl"><FaUserTie /><span className="m-2">{user?.displayName}</span>
                    
                </li>
                <li className="m-4"><button onClick={()=>handleSignOut()}  className="text-white bg-black px-4 py-2 text-sm rounded-lg">Sign Out</button></li>
                
                

            </ul>
        </div>
    )

};
export default Header;