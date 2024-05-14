"use client"

import Link from "next/link"
import { useEffect, useState } from "react" 
import { usePathname } from "next/navigation"
import Image from "next/image"
import { AlignRight, ArrowRight, X } from "lucide-react"
import { User } from "lucide-react"
import GetStarted from "./getStarted"


export default  function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    const [rotate, setRotate] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        if(showMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto";
            setRotate(false)
        }
    },[showMenu])

      useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const navItems = [
      { label: "Features", href: "/features" },
      { label: "Product", href: "/product" },
      { label: "Testimonial", href: "/testimonial" },
      { label: "FAQ", href: "/faq" }
  ];


    return (
        <div className={` ${pathname === '/authentication' || pathname === '/authentication/login' || pathname === '/authentication/login/reset' ? "hidden" : " inline"} `}>
            <nav style={{ backdropFilter: 'blur(6.7px)' }} className={`  ${scrolled ? 'bg-opacity-30' : ''}  z-50 hidden lg:flex justify-between items-center sticky top-0 px-8 md:px-24 py-6 `}>
            <Image src={'/logo.svg'} width={100} height={100} alt="logo"/>
            <div className="flex gap-8 text-sm text-[#4B5563]">
            {navItems.map((item, index) => (
                        <Link key={index} href={item.href}>
                            {item.label}
                        </Link>
                    ))}
            </div>
              <GetStarted />
            </nav>

      {/* Smaller screens */}
      <nav
        style={{ backdropFilter: 'blur(6.7px)' }}
        className={` ${
          pathname !== '/' ? 'bg-black text-white' : 'bg-white text-black'
        } ${scrolled ? 'bg-opacity-30' : ''} z-50 flex w-full lg:hidden justify-between items-center sticky top-0 py-3 px-4`}
      >
                     <Image src={'/logo.svg'} width={100} height={100} alt="logo"/>
                <div onClick={() => setShowMenu(true)} className="bg-orangeB text-white p-1 rounded-full" >
                    <AlignRight size={20}/>
                </div>
      </nav>

        {showMenu && (
          <div className="fixed  top-0 left-0 right-0 bottom-0 z-50 flex ">
            <div style={{ backdropFilter: 'blur(5.7px)' }} className="bg-black bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
              <button
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 rounded-full p-1 bg-white duration-300 text-black hover:bg-[#bebcbc]"
              >
                <X size={23}/>
              </button>
            <div className="bg-white rounded-lg p-4 text-black flex flex-col gap-4 text-[20px]  w-full mx-4 mt-14 z-10 h-fit">
            {navItems.map((item, index) => (
                        <Link key={index} href={item.href} className="pb-2 border-b">
                            {item.label}
                        </Link>
                    ))}
                    <GetStarted />
            </div>
          </div>
        )}

        </div>
    )
  }



