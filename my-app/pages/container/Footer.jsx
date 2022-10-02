import tw from "tailwind-styled-components";

const Footer = () => {
  return (
    <div>
        <AboutUs>
            <Heading>About Us</Heading>
            <Paragraph>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem aspernatur eum nemo eos numquam aliquam. Id ratione hic libero enim?</Paragraph>
        </AboutUs>
        <ContactUs>
        <Heading>Contact Us</Heading>
        </ContactUs>
      </div>
  )
}

export default Footer

const AboutUs = tw.div`
w-[50%]
`
const ContactUs = tw.div`
w-[50%]
`
const Heading = tw.h1`
font-bold text-4xl capitalize text-[#00459e]
`
const Paragraph = tw.p`text-justify text-xl py-4 text-white
`