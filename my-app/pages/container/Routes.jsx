import tw from "tailwind-styled-components";
import {routes} from "../data/Routes";

const Routes = () => {
  return (
    <div>
    <Heading>Popular Routes From Kotdwara</Heading>
    <ListWrapper>
      <ListHead>
      <div className='flex justify-start w-[20%]'>Routes</div>
         <div className='flex justify-start w-[10%]'>Fares</div>
         <div className='flex justify-start w-[10%]'>Distance</div>
         <div className='flex justify-start w-[20%]'>Time</div>
      </ListHead>
    {routes.map((item) => (
       <ListContent key={item.id}>
       <div className='flex justify-start text-[#FF0000] w-[20%]'>{item.route}</div>
         <div className='flex justify-start w-[10%]'>{item.price}</div>
         <div className='flex justify-start w-[10%]'>{item.distance}</div>
         <div className='flex justify-star w-[20%]'>{item.time}</div>
       </ListContent>
    ))}
    </ListWrapper>
  </div>
  )
}

export default Routes

const ListWrapper = tw.div`
pb-2 flex flex-col justify-between my-8 shadow-xl border-solid border-gray-200 border-2 rounded-[8px]
`
const ListHead = tw.div` 
flex items-center justify-between text-xl font-bold text-white bg-black py-2 px-4 rounded-t-[8px] mb-6
`
const ListContent = tw.div`
flex items-start justify-between text-xl font-semibold text-gray-600 pb-6 px-4
`
const Heading = tw.h1`
font-bold text-black text-4xl capitalize
`