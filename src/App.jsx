import {  Route, Routes, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Browse from "./components/Browse";
import Login from "./components/Login";
import Hero from "./components/Hero";
import { useEffect  } from "react";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";
import Error from "./components/Error"; 


const App = ()=> {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    // This is the Sign In/Sign Up case
    const {email ,uid , displayName} = user;
    dispatch(addUser({uid: uid, email: email, displayName: displayName}));
    navigate("/browse")
    
  } else {
    // This is the signed out case
    dispatch(removeUser());
    navigate("/");
    
    
    
  }
});
  },[])
 

  return (
  <Routes>
    <Route path="/" element={<Hero />} />
    <Route path="/browse" element={<Browse />} />
    <Route path="/login" element={<Login />} />
    <Route path="/error" element={<Error />} />
  </Routes>
    
   
  )

  
}

export default App;
