import { useState } from "react";
import {data} from "../utils/data";

const Task = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [filterOptn, setFilterOptn] = useState(data);

  let rating = [];
  for(let i=0; i<filterOptn.star ;i++){
    rating.push();
  }

  const def = () =>{
    setFilterOptn(data);
    setActiveFilter(null);
  }

  const Cloths = ()  => {
    const filterdData = data.filter(
      (d)=>d.category === 'cloth'
    )
    setFilterOptn(filterdData);
    setActiveFilter('cloth');
  } 

  const Phones = ()  => {
    const filterdData = data.filter(
      (d)=>d.category === 'phone'
    )
    setFilterOptn(filterdData);
    setActiveFilter('phone');
  } 

  const Shoes = ()  => {
    const filterdData = data.filter(
      (d)=>d.category === 'shoe'
    )
    setFilterOptn(filterdData);
    setActiveFilter('shoe');
  } 

  return (
    <div id="projects" className="pt-9  h-full w-4/5 flex items-center flex-col">
        <h2 className='text-center font-bold text-3xl font-mono'>Image Filter</h2>
        <div id="filter" className="">
          <button className={`px-3 py-1 font-semibold border border-black mx-3 mt-6  ${activeFilter === null? 'bg-black text-white': 'hover:bg-black hover:text-white'}`} onClick={def}>Show All</button>
          <button className={`px-3 py-1 hover:bg-black hover:text-white font-semibold border border-black mx-3 mt-6 ${activeFilter==='cloth'?'bg-black text-white':'hover:bg-black hover:text-white'}`} onClick={Cloths}>Cloths</button>
          <button className={`px-3 py-1 hover:bg-black hover:text-white font-semibold border border-black mx-3 mt-6 ${activeFilter==='shoe'?'bg-black text-white':'hover:bg-black hover:text-white'} `} onClick={Shoes}>Shoes</button>
          <button className={`px-3 py-1 hover:bg-black hover:text-white font-semibold border border-black mx-3 mt-6 ${activeFilter==='phone'?'bg-black text-white':'hover:bg-black hover:text-white'} `} onClick={Phones}>Phones</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 justify-center mt-7">
          {
            filterOptn.map((item)=>(
              <div key={item.id} className='h-[350px] w-[350px] cursor-pointer p-3 hover:scale-95 transition-all delay-75 ease-in-out'>
                <div className='h-[250px] w-full'>
                  <img src={item.src} className='w-full h-[100%] rounded-xl object-cover'/>
                </div>
                <div className='px-3'>
                  <h3 className='font-bold uppercase font-mono text-xl mt-2'>{item.head}</h3>
                  <h3 className='font-bold uppercase font-mono'>{item.price}</h3>
                  <h4>{item.details}</h4>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Task