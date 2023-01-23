import Navbar from "./Navbar";

import Trends from "./Trends";

export default function Menu(){
    return(
        <div className="relative w-[20%] min-h-screen border-r-[1px] border-[#1e2029] max-[640px]:hidden ">
            <img className="h-[80px] p-6 w-[210px] border-b-[1px] mb-4 border-[#1e2029]" src="assets/logo_beta.svg"/>
            <Navbar/>
            <Trends/>
        </div>
    );
}
