import tw from "tailwind-styled-components";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <Wrapper>
      <motion.div initial={{ rotateX: 90 }} animate={{ rotateX: 0 }} transition={{ delay: 0.2, duration: 0.4, type: 'spring', stiffness: 200 }}>
        <NavContainer>
          <Logo>
            <Image width={100} height={30} src='/logo.png' />
          </Logo>
          <ListContainer>
            <Li><Link href="/">Home</Link></Li>
            <Li><Link href="/">Blogs</Link></Li>
            <Li><Link href="/">Contact Us </Link></Li>
            <Li><Link href="/">About Us  </Link></Li>
            <LiBtn><Link href="/">Register </Link></LiBtn>
          </ListContainer>

          <MenuBtn onClick={handleNav}>
            <AiOutlineMenu size={40} />
          </MenuBtn>
        </NavContainer>

        {/* Side Drawer Menu */}
        <NavContainer2 className={
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white ease-in duration-500 z-30'
            : 'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen ease-in duration-500 z-20'}>

          <NavWrapper>
            <LogoAndBtn>
              <Logo>Travel At Area</Logo>
              <CloseBtn onClick={handleNav}> <AiOutlineClose size={40} /> </CloseBtn>
            </LogoAndBtn>

            <ListContainer2>
              <Li2 onClick={() => setNav(false)}><Link href="/">Home</Link></Li2>
              <Li2 onClick={() => setNav(false)}><Link href="/">Blogs</Link></Li2>
              <Li2 onClick={() => setNav(false)}><Link href="/">Contact Us</Link></Li2>
              <Li2 onClick={() => setNav(false)}><Link href="/">About Us</Link></Li2>
              <Li2Btn onClick={() => setNav(false)}><Link href="/">Register</Link></Li2Btn>
            </ListContainer2>
          </NavWrapper>
        </NavContainer2>
      </motion.div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = tw.div`p-4 z-10 lg:px-20 lg:py-4`

const Logo = tw.div`
text-black font-bold text-4xl  

lg:text-2xl
2xl:text-3xl
`
const Li = tw.li`
ml-10 text-sm uppercase cursor-pointer text-black

sm:font-semibold 
md:font-semibold  
lg:text-sm lg:font-semibold
xl:text-sm xl:font-semibold
2xl:text-xl 2xl:font-semibold
`
const LiBtn = tw.li`
ml-10 text-sm uppercase cursor-pointer 
bg-black text-white p-2 rounded-sm

sm:font-semibold 
md:font-semibold  
lg:text-sm lg:font-semibold
xl:text-sm xl:font-semibold
2xl:text-xl 2xl:font-semibold
`
const ListContainer = tw.ul`justify-between items-center hidden lg:flex`

const MenuBtn = tw.div`lg:hidden`

const NavContainer = tw.div`
flex justify-between items-center 
`

/* Side Drawer Menu */
const NavContainer2 = tw.div`
shadow-lg shadow-black/30

lg:hidden
xl:hidden
2xl:hidden
`
const NavWrapper = tw.div`flex flex-col justify-start items-start w-full h-screen 
`
const LogoAndBtn = tw.div`flex w-full items-center justify-between pb-2 px-10 py-4
border-b-2 border-gray-200/40 border-solid`

const CloseBtn = tw.div`cursor-pointer z-30`

const Li2 = tw.li`
list-none
text-2xl font-bold uppercase cursor-pointer text-black z-30 pb-10
`
const Li2Btn = tw.li`
list-none
mb-10 text-lg uppercase cursor-pointer z-30 cursor-pointer
bg-black text-white p-4 rounded-lg text-2xl font-bold
`
const ListContainer2 = tw.div`flex flex-col justify-between items-start px-10 py-8`