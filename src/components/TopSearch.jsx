import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch,faBars } from "@fortawesome/free-solid-svg-icons";
import { useState,useEffect} from "react";

import MobileBar from './MobileBar';

export default function TopSearch(){
    const [nav,setNav] = useState(0);
    
    useEffect(()=>{
        
    })
    return( 
        <div className="flex items-center justify-between p-4 w-full border-b-[1px] mb-4 border-[#1e2029] min-h-[80px] max-[640px]:flex-col">
            {nav == 1 ? <MobileBar/> : ""}
            <img className="h-[80px] p-6 w-[210px] mb-4 hidden max-[640px]:block" src="assets/logo_beta.svg"/>
            <div className="flex w-full">
            <div className="rounded flex items-center w-full">
                <FontAwesomeIcon className="absolute mx-2 text-[#7b7c80]" icon={faSearch}/>
                <input type="text" className="w-[520px] text-[#7b7c80] h-[35px] outline-none rounded-full px-8 placeholder-[#7b7c80] text-[16px]  py-1  max-[640px]:w-[95%]" placeholder="Dizi ve film ara"/>
            </div>
                <FontAwesomeIcon className="bg-[#1e2029] cursor-pointer text-white text-[14px] p-3 hidden max-[640px]:block " icon={faBars}  onClick={() => setNav(1)}/>
            <div className="flex gap-2  max-[640px]:hidden">
                <button className="flex items-center uppercase text-white  bg-[#1e2029] p-3 text-[14px] h-[35px] w-[90px]">Giriş Yap</button>
                <button className="flex items-center uppercase text-white  bg-[#1e2029] p-3 text-[14px] h-[35px] w-[90px]">Kayıt Ol</button>
            </div>
            </div>
        </div>
    )
}