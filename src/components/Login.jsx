import { useState } from "react";
const Login = () =>{

   const [isSignInForm ,setIsSignInForm] = useState(true);

   const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    };
   
    return (
        <div className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.redd.it/zjgs096khv591.jpg')"
      }}>
            <div className='absolute inset-0 bg-black/80 z-0'></div>
        <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"  width={200} className="absolute inset-0"/>
         <div className=" absolute flex items-center justify-center flex-col text-white bg-black/70  h-fit w-fit p-15 rounded-4xl ">  
            <h2 className="text-red-700 text-4xl font-bold mb-10">{isSignInForm ? "Welcome Back" : "Set Up Your Account"}</h2>
             <form className="flex flex-col items-center justify-center  "> 
                {!isSignInForm &&  <input type="text" placeholder="Enter First Name" className=" p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4 bg-gray-700" />
}{!isSignInForm &&  <input type="text" placeholder="Enter Last Name" className=" p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4 bg-gray-700" />
}{!isSignInForm &&  <input type="date" placeholder="Enter DOB" className=" p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4 bg-gray-700" />
}
                <input type="email" placeholder="Enter Email" className=" p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4 bg-gray-700" />
                <input type="password" placeholder="Enter Password" className=" p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4 bg-gray-700"/>
                 <button className="bg-red-500 px-8 py-3 rounded-lg mt-5 w-full">{isSignInForm? "Sign In" : "Sign Up"}</button>
             </form>
             <p className="mt-12 cursor-pointer text-blue-500" onClick={()=>{
               toggleForm();
                
             }}>{isSignInForm? "New to Netflix?  Sign up" : "Already have an Account?  Sign In"}</p>
            
         </div>

        </div>
    );

};
export default Login;