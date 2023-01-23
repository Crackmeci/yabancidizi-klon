import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {pages} from './MenuData';
import { useState,useEffect } from "react";

export default function MobileBar(){
    const [close,setClose] = useState(0);
    const normalMenu = "text-white w-full mb-4 cursor-pointer text-[15px] p-4 pl-8 hover:bg-[#1819237a] hover:border-[#42e3d0] hover:border-r-2 hover:text-white  duration-50";
    const activeMenu = "text-white border-[#42e3d0] mb-4 border-r-2 cursor-pointer text-[15px] bg-[#1819237a] p-4 pl-8 hover:bg-[#181923] hover:border-[#42e3d0] hover:border-r-2 hover:text-white  duration-50 "

    useEffect(()=>{
        if(close == 1){
            document.querySelector(".mobilemenu").style.display = 'none';
        }
        setClose(0);
    },[close])

    useEffect(()=>{ 
        document.querySelector(".mobilemenu").style = "";
    },[])
    

    return(
        <div className="mobilemenu w-full h-full fixed overflow-y-auto left-0 top-0 bg-[#00000090] z-[999] backdrop-blur-lg grid place-items-center">
            <div className='flex bg-[#1819237a] items-center p-4 w-full justify-between'>
                <h2 className='uppercase text-left  text-white text-[18px] font-bold'>Menü</h2>
                <div>
                    <FontAwesomeIcon className="text-white text-[18px] cursor-pointer" onClick={()=> setClose(1)} icon={faTimes}/>
                </div>
            </div>
            <nav className='w-full mt-20'>
                <ul className='w-full'>
                {pages.map(p =>{
                    return <li className={p.active == 1 ? activeMenu : normalMenu} key={p.id}><a className="flex gap-2 items-center w-full" href={p.url}>{p.icon} {p.name}</a></li>;
                })}
                </ul>
            </nav>
        </div>
    );
}