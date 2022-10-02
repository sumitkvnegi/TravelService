import tw from "tailwind-styled-components";
import { blogs } from "../data/Blogs";
import Link from "next/link";
import {MdDoubleArrow} from "react-icons/md";

const Blogs = () => {
  return (
    <>
              <Heading>Blogs</Heading>
        <Blog>
        {blogs.map((item) => (
              <Link href="#" key={item.id}>
                <L>
                  <ListPics src={item.url} className="bg-no-repeat bg-cover bg-center bg-fixed"></ListPics>
                  <div className="px-4 w-full">
                    <h3 className="mt-4 text-md font-bold leading-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                    <p className="text-xs my-4 text-justify text-gray-500 uppercase font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit corporis earum laboriosam! Sint quam et consequuntur illum, atque accusantium veniam inventore quaerat, eum minus cumque quia quas obcaecati! Quasi, quidem.</p>
                    <div className="flex w-full justify-end items-center text-xs font-medium">
                      <Link href="/">
                      <RedBtn>Read more <MdDoubleArrow className='pt-1' size={22}/></RedBtn>
                      </Link>
                    </div>
                  </div>
                  <hr className="border-gray-200 my-3"></hr>
                </L>
              </Link>
            ))}
        </Blog>
    </>
  )
}

export default Blogs

const Blog = tw.div`py-4 flex justify-between items-center flex-wrap

md:py-10
`
const Heading = tw.h1`
font-bold text-black text-4xl capitalize uppercase tracking-wide
`
const L = tw.div`
flex items-center justify-between w-[100%] transform transition-all duration-1000 scale-100 hover:scale-95 border-solid border-gray-200 border-2 rounded-xl shadow-md overflow-hidden mb-4

md:flex-col md:w-[48%] md:mb-10 lg:w-[30%] xl:w-[22%] 2xl:w-[20%]
`
const ListPics = tw.img`
h-60 w-full overflow-hidden p-2 rounded-l-[16px] md:rounded-l-[0px] md:rounded-t-[16px]
`
const RedBtn = tw.p`
text-[#FF0000] text-lg font-bold flex items-center justify-between hover:translate-x-1 ease-in-out duration-500 cursor-pointer
`