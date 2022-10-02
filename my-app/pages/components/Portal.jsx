import React, { useState } from "react";
import Map from "./Map";
import tw from "tailwind-styled-components";
import Link from "next/link";
import {motion} from "framer-motion";

const Portal = () => {
    const [current, setCurrent] = useState("kotdwara");
    const [destination, setDestination] = useState("pauri");
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:0.9}}>

         <Map />
                    <ActionItems>
                        <InputContainer>
                            <FromToIcons>
                                <Circle src="https://img.icons8.com/android/24/228BE6/center-direction.png" />
                                <Line src="https://img.icons8.com/windows/32/000000/menu-2.png" />
                                <Marker src="https://img.icons8.com/android/24/FA5252/place-marker.png" />
                            </FromToIcons>
                            <InputBoxes>
                                <Select
                                    value={current} onChange={(e) => setCurrent(e.target.value)}>
                                    {/* <option value="" disabled selected>Your Location</option> */}
                                    <option value="kotdwara">Kotdwara</option>
                                </Select>
                                <Select
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}>
                                    {/* <option value="" disabled selected>Destination</option> */}
                                    <option value="pauri">Pauri</option>
                                    <option value="dehradun">Dehradun</option>
                                    <option value="haridwar">Haridwar</option>
                                    <option value="satpuli">Satpuli</option>
                                </Select>
                            </InputBoxes>
                        </InputContainer>
                    </ActionItems>
                    <Link href="/">
                        <Btn >
                            Book Now
                        </Btn>
                    </Link>
    </motion.div>
  )
}

export default Portal

const ActionItems = tw.div`
flex-auto h-1/3 
`
const InputContainer = tw.div`
px-2 pb-4 flex space-x-2 items-center 
`
const FromToIcons = tw.div`
flex flex-col justify-between items-center
`
const Circle = tw.img`
h-5 
`
const Line = tw.img`
h-6 my-2 
`
const Marker = tw.img`
h-5
`
const InputBoxes = tw.div`
flex flex-col flex-1 items-center
`
const Select = tw.select`
h-10 my-2 bg-[#f8fafc] rounded-md p-2 outline-none border-none w-full
drop-shadow-md 
`
const Btn = tw.div`
h-12 bg-gray-900 m-1 text-white text-2lg px-3 py-4 flex justify-center items-center cursor-pointer rounded-md drop-shadow-md hover:bg-gray-500 transition ease-in-out duration-100 cursor-pointer
`