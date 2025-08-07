


const Body = () => {

   return(
   <div  className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage: "url('https://i.redd.it/zjgs096khv591.jpg')",
      }}>
        <div className='absolute inset-0 bg-black/80 z-0'></div>
   
        <div   className=" relative z-10">
            <ul className="flex justify-between z-10">
                  <li><img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"  width={200}/></li>
                  <li ><button className="bg-red-600 m-3 px-6 py-3">Sign In</button></li>
            </ul>

       </div>
      <div className='absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center m-5 z-10 '>
              <h1 className='text-6xl font-bold m-5'>Unlimited movies, TV shows and more </h1>
              <h3 className='text-4xl'> Starts at ₹149. Cancel at any time.</h3>
              <h3 className=' text-xl m-5'>Ready to watch? Enter your email to create or restart your membership.</h3>
              <p className='m-5'><input type="text" placeholder="Enter your email" class="w-7/12 m-4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"/>
              <button className='bg-red-600 rounded-md py-3 px-8'>Get Started</button></p>
      </div>
   </div>
   )
}

export default Body;