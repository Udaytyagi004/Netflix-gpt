import { Link } from "react-router-dom";
import { Netflix_Logo } from "../utils/constants";
import { BG_Img } from "../utils/constants";
const Hero = () =>{
     return(
   <div  className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage: BG_Img,
      }}>
        <div className='absolute inset-0 bg-black/80 z-0'></div>
   
        <div   className=" relative z-10  p-5">
            <ul className="flex justify-between z-10">
                  <li><img src={Netflix_Logo}  width={200}/></li>
                  <Link to ="/login" className="pointer-cursor"><li ><button className="bg-red-600 m-3 px-6 py-3 rounded-lg font-bold text-white " >Sign In</button></li></Link>
            </ul>

       </div>
      <div className='absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center m-5 z-10 '>
              <h1 className='text-6xl font-bold m-5'>Unlimited movies, TV shows and more </h1>
              <h3 className='text-4xl'> Starts at ₹149. Cancel at any time.</h3>
              <h3 className=' text-xl m-5'>Ready to watch? Enter your email to create or restart your membership.</h3>
              <p className='m-5'><input type="text" placeholder="Enter your email" class="w-7/12 m-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"/>
              <button className='bg-red-600 rounded-md py-3 px-8 font-bold '>Get Started</button></p>
      </div>
   </div>
   )

};
export default Hero;