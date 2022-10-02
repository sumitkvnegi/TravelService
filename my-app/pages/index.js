import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";
import { Navbar, Hero, About, Blogs, Routes, Footer } from "./container";
import Loader from "./components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    (isLoading == true ? <Loader /> :
      <Wrapper>
        {/* <Navbar /> */}
        <HeroSection>
            <Hero />
          </HeroSection>
          {/* <AboutSection>
          <About />
        </AboutSection>
          <BlogSection>
      <Blogs />
      </BlogSection> */}
        {/*<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
         
        </motion.div>
         
      
      <RoutesSection>
      <Routes />
      </RoutesSection>
      <FooterSection>
      <Footer />
      </FooterSection> */}
      </Wrapper>
    )
  )
}

const Wrapper = tw.div`
 `
const HeroSection = tw.div`
  bg-[url('../public/images/bg.jpg')] bg-no-repeat bg-center bg-cover
  w-full h-full 

  lg:h-screen
`
const AboutSection = tw.div`px-4 py-10 lg:p-20
`

const BlogSection = tw.div`px-4 py-10 lg:p-20
`

const RoutesSection = tw.div`px-20 py-8
`

const FooterSection = tw.div`px-20 py-8 flex justify-between items-start bg-black
`