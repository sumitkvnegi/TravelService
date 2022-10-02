import tw from "tailwind-styled-components";
import {FiSun} from "react-icons/fi";
import {GiPathDistance} from "react-icons/gi";
import {MdOutlineWatchLater} from "react-icons/md";

const About = () => {
  const data = [
    {
      name: "pauri",
      distance: 105.6,
      duration: [3, 23],
      via: "NH534"
    },
    {
      name: "dehradun",
      distance: 117.1,
      duration: [2, 52],
      via: "Nimbuchaur - Haridwar Rd and Ambala-Dehradun-Haridwar Rd/Haridwar Rd"
    },
    {
      name: "haridwar",
      distance: 66.4,
      duration: [1, 34],
      via: "NH534 and Nimbuchaur - Haridwar Rd"
    },
    {
      name: "satpuli",
      distance: 53.2,
      duration: [1, 46],
      via: "NH534"
    }
  ]

  return (
    <>
          <Heading>About Pauri</Heading>
          <Container>
          <div className="">
      <img className="rounded-xl shadow-xl" src="/images/pauri.webp"/>
    </div>
    <LeftContainer>
    <Details>
      <div className="flex ">
        <div><FiSun size={30} className="text-[#0029FF]"/></div> 
        <div className="flex flex-col ml-4">
            <div className="text-gray-600 text-lg">weather</div>
            <div className="text-gray-900 text-xl font-semibold">Sunny</div>
            </div> 
            </div>
      <div className="flex">
        <div><GiPathDistance size={30} className="text-[#FF0000]"/></div> <div className="flex flex-col ml-4">
            <div className="text-gray-600 text-lg">distance</div>
            <div className="text-gray-900 text-xl font-semibold">250 kms</div>
            </div> 
            </div>
      <div className="flex ">
        <div><MdOutlineWatchLater size={30} className="text-[#04D200]"/></div> 
        <div className="flex flex-col ml-4">
            <div className="text-gray-600 text-lg">time</div>
            <div className="text-gray-900 text-xl font-semibold">3 hrs 33 mins</div>
            </div> 
            </div>
    </Details>
    <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nam odit quod rerum vitae unde? Maxime esse molestiae fugit laborum consequuntur quae. Quidem repellat recusandae pariatur dignissimos in doloremque ratione vel delectus voluptates laborum. Ipsum incidunt repellat beatae illum labore.</Paragraph>
    </LeftContainer>
          </Container>
    </>
  )
}

export default About

const Container = tw.div`flex flex-col justify-between items-start
`

const LeftContainer = tw.div`w-[100%]
flex flex-col justify-between
`
const Heading = tw.h1`mb-4
font-bold text-black text-3xl capitalize
`
const Paragraph = tw.p`text-justify text-2xl 
`
const Details = tw.div`
flex flex-wrap justify-between items-center w-[100%] capitalize mt-10 mb-8

sm:w-[90%]
md:w-[80%]
lg:w-[60%]
xl:w-[50%]
2xl:w-[40%]
`

/* 
FiSun
FiCloudDrizzle
BsCloudSun
GiPathDistance
MdOutlineWatchLater
*/