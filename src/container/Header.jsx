import React,{useState} from 'react'

const Header = () => {
    let Links = [
        { name: "Statistics", link: "/statistic" },
        { name: "Overview", link: "/overview" },
        { name: "Dashboard", link: "/dashboard" },
        { name: "Analytics", link: "/analytics" },
      ];
      let [open, setOpen] = useState(false);
    return (
        <div style={{ height: "60px", width: "1920px", left: "0px", top: "0px", borderRadius: "0px", display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <span className='inner'>
                    <img style={{ height: "39.34px", width: "39.34px", left: "0.33px", top: "0", borderRadius: "0" }} src="https://www.thewasserstoff.com/images/logo-top.png" alt="" />
                </span>
                <span style={{ height: "22px", width: "161px", left: "37px", top: "5px", borderRadius: "nullpx" }}>
                    WASSERSOFT
                </span>
            </div>
            <div style={{ display: "flex" }}>
                <input type="text" style={{ height: "32px", width: "520px", left: "0px", top: "0px", borderRadius: "8px" }} />
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='text-xl text-slate-400	 flex space-x-10 justify-end ml-8 first-letter: '>
                <a href={link.link} className='cursor-pointer'>{link.name}</a>
              </li>
            ))
          }

        </ul>

        </div>
    )
}

export default Header