import React, { useState } from 'react'


const Nav = () => {
  let Links = [
    { name: "Statistics", link: "/statistic" },
    { name: "Overview", link: "/overview" },
    { name: "Dashboard", link: "/dashboard" },
    { name: "Analytics", link: "/analytics" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='drop-shadow-md  w-full fixed top-0 left-0'>
      <div className='md:flex items-center  justify-between bg-white py-2 md:px-10 px-7'>
        <div className='font-bold text-3xl cursor-pointer flex items-center  font-[Poppins] 
      text-gray-800'>
          <span className='text-2xl mr-1 pt-2'>
            <img src="https://www.thewasserstoff.com/images/logo-top.png" alt="wassersoft logo" class="object-fill h-8 w-8 " />
          </span>
          <span className='text-2xl  pt-2'> WASSERSOFT</span>

        </div>
        <div>
          <input type="text" className='bg-slate-100 h-2 w-60' />
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='text-sm flex space-x-10 justify-end ml-8 first-letter: '>
                <a href={link.link} className='cursor-pointer'>{link.name}</a>
              </li>////text-sm flex space-x-10 justify-end ml-80 first-letter:,cursor-pointer
            ))
          }

        </ul>

      </div>
    </div>
  )
}

export default Nav
