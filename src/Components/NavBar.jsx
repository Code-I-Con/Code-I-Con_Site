import React, {useState} from 'react'
 
const Navbar = () => {
 
   const[nav,setNav] = useState(false)
   const handleClick = () => setNav(!nav)
 
 return (
   <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg' >
 
       <div className='px-2 flex justify-between items-center w-full h-full'>
 
           <div className='flex items-center'>
               {/* sm:text-4xl means that any screen above 640 px will become 4xl */}
               <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>CODE-I-CON</h1>
               <ul className='hidden md:flex'>
                   <li>Home</li>
                   <li>About</li>
                   <li>Camps</li>
                   <li>Committees</li>
                   <li>Our Team</li>
                   <li>Contact Us</li>
               </ul>
           </div>
 
           <div onClick={handleClick}>
               {/* if onClick is true, it will stay as hamburger icon
               if onClick is false, it will change to x icon */}
               {
                   !nav ?
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 md:hidden">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                   </svg> :
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-6 md:hidden">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                   </svg>
                
               }
              
           </div>
 
       </div>
 
       {/* If nav is true it will be hidden, and if it is false list will be displayed */}
      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
           <li className='border-b-2 border-zinc-300 w-full'>Home</li>
           <li className='border-b-2 border-zinc-300 w-full'>About</li>
           <li className='border-b-2 border-zinc-300 w-full'>Camps</li>
           <li className='border-b-2 border-zinc-300 w-full'>Committees</li>
           <li className='border-b-2 border-zinc-300 w-full'>Our Team</li>
           <li className='border-b-2 border-zinc-300 w-full'>Contact Us</li>
      </ul>
 
   </div>
 )
}
 
export default Navbar
 
 
