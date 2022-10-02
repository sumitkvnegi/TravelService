import Portal from "../components/Portal";
import tw from "tailwind-styled-components";
import AnimatedText from "../components/AnimatedText";

const Hero = () => {
    return (
        <Main>
            <WelcomeTypography>
                <Title className="text-white">
                    <AnimatedText text="Let's Travel Together" /></Title>
                <Title className="text-[#34a853]">
                    <AnimatedText text="Hurry Up On the Booking!" />
                </Title>
                <Description>A web portal that connects you with the professional drivers of 5+ years of experience.</Description>
                <ScrollBtn>
                 
                        Explore
               
                </ScrollBtn>
            </WelcomeTypography>
            <BookingPortal>
                <Portal />
            </BookingPortal>
        </Main>
    )
}

export default Hero

const Main = tw.div`
bg-black/20 flex flex-col justify-between items-center w-full h-[50%] z-10 px-4 py-10

lg:flex-row  lg:items-start lg:justify-center
lg:px-10 lg:py-20 lg:h-screen
`
const WelcomeTypography = tw.div`
flex flex-col items-center  justify-between w-[100%] mb-10 lg:pr-4

lg:w-[52%] lg:items-start xl:w-[55%] 2xl:w-[65%]
`
const Title = tw.h1`text-3xl Class font-bold text-center


sm:text-center 
md:text-center 
lg:text-left lg:text-3xl
xl:text-left xl:text-5xl  
2xl:text-left 2xl:text-6xl
`
const Description = tw.p`mt-2 text-lg text-[#eeeeee] text-center

sm:text-center 
md:text-center
lg:text-left  lg:text-xl
xl:text-left  xl:text-2xl 
2xl:text-left 2xl:text-3xl
`
const ScrollBtn = tw.button`
bg-[#000] text-white rounded-lg flex justify-center items-center shadow-xl border-solid border-[#333] border-2 w-fit h-fit px-2 relative hidden

lg:flex
lg:mt-4 lg:px-4 lg:py-2
xl:mt-10 xl:px-4
`

const BookingPortal = tw.div` text-black bg-white overflow-y-auto  scrollbar-hide rounded-lg w-[100%] p-4 

lg:w-[40%] lg:mt-0
xl:w-[38%] 
2xl:w-[30%] 
`
