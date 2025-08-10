import { useState , useRef } from "react";
import { BG_Img, Netflix_Logo } from "../utils/constants";
import { dataValidation } from "../utils/DataValidation";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () =>{

   const [isSignInForm ,setIsSignInForm] = useState(true);
   const [errorMsg ,setErrorMsg] = useState(null);
  
   const dispatch = useDispatch();

   const email = useRef(null);
   const password = useRef(null);
   const userName  = useRef(null);
   

   const formDataValidation =() =>{
    //form validation
    const message = dataValidation(email.current.value,password.current.value);
    setErrorMsg(message);
    
    if(message) return;

    //sing-In and Sign-Up Logic

    if(!isSignInForm){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
         const user = userCredential.user;
         updateProfile(user, 
          {
                 displayName: userName.current.value
          }).then(() => {
              // Profile updated!
              const {email ,uid , displayName} = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, displayName: displayName}));
             
  
            }).catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
   
           });
         
    
      })
        .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
     setErrorMsg(errorCode + " " + errorMessage);
     });
   }
   //sign In form
   else{
    signInWithEmailAndPassword(auth,email.current.value, password.current.value)
     .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode + " " + errorMessage);
  });
   }
     

   }

   const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    };
   
    return (
        <div className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: BG_Img
      }}>
            <div className='absolute inset-0 bg-black/80 z-0'></div>
        <img src={Netflix_Logo}  width={200} className="absolute inset-0 m-5"/>
         <div className=" absolute flex items-center justify-center flex-col text-white bg-black/70  h-fit w-fit p-15 rounded-4xl ">  
            <h2 className="text-white text-4xl font-bold mb-10">{isSignInForm ? "Welcome Back" : "Set Up Your Account"}</h2>
             <form onSubmit={(e)=>e.preventDefault()} className="flex flex-col items-center justify-center  "> 
                {!isSignInForm &&  <input type="text" ref={userName} placeholder="Enter User Name" className=" p-2 border border-none rounded-md shadow-sm outline-none mb-4 bg-gray-700" />}               
                <input type="text" ref={email} placeholder="Enter Email" className=" p-2 border border-none rounded-md shadow-sm outline-none  mb-4 bg-gray-700" />
                <input type="password" ref={password} placeholder="Enter Password" className=" p-2 border border-none rounded-md shadow-sm outline-none  mb-4 bg-gray-700"/>
                <p className="text-red-600 ">{errorMsg}</p>
                 <button className="bg-red-500 px-8 py-3 rounded-lg mt-5 w-full" onClick={()=>{
                  formDataValidation();
                 }} >{isSignInForm? "Sign In" : "Sign Up"}</button>
             </form>
             <p className="mt-12 cursor-pointer text-blue-500" onClick={()=>{
               toggleForm();
                
             }}>{isSignInForm? "New to Netflix?  Sign up" : "Already have an Account?  Sign In"}</p>
            
         </div>

        </div>
    );

};
export default Login;