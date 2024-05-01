/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useState } from "react";

const Carousel = ({slideData}) => {
    const[slide, setSlide] = useState(0);
    
    useEffect(
        ()=>{
            const timer = setTimeout(() => {
                if(slide+1 === slideData.length){
                    setSlide(0);
                } else {
                    setSlide(slide+1);
                } 
            }, 5000);
            return ()=> clearTimeout(timer)
        }, [slide]
    );


    return (
        <div id="carousel" className="w-60% h-full flex items-center relative justify-center">
            
            <svg xmlns="http://www.w3.org/2000/svg"
            onClick={
                ()=>{
                    slide+1 == slideData.length ? setSlide(0) : setSlide(slide+1);
                }
            }
            fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-10 absolute hover:cursor-pointer right-4 shadow-md hover:shadow-black hover:bg-white hover:text-black text-white border p-1 border-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            {
                slideData.map((items, indx)=>{
                    return <img className={(slide === indx) ? 'rounded-lg w-full h-full shadow-black shadow-md ': 'hidden rounded-lg w-full h-full shadow-black shadow-md ' } src={items.src} alt={items.alt} key={indx} />
                })
            }
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
             onClick={
                ()=>{
                    slide-1 === -1? setSlide(slideData.length-1) : setSlide(slide-1)
                }
             }
             viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-10 absolute hover:cursor-pointer shadow-md hover:shadow-black left-4 hover:bg-white hover:text-black text-white border p-1 border-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

            <span className="flex absolute bottom-2 gap-3">
                {
                    slideData.map((_, indx)=>{
                        return <button className={indx === slide? 'bg-white h-3 w-3 rounded-full': 'bg-slate-500 h-3 w-3 rounded-full'} key={indx} onClick={
                            ()=>{
                                setSlide(indx);
                            }
                        }></button>
                    })
                }
            </span>
        </div>
    );
}

export default Carousel