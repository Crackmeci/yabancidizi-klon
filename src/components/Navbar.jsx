import {pages} from './MenuData';


export default function Navbar(){
    const normalMenu = "text-[#9b9dab] w-full cursor-pointer text-[15px] p-2 pl-8 hover:bg-[#181923] hover:border-[#42e3d0] hover:border-r-2 hover:text-white  duration-50";
    const activeMenu = "text-white border-[#42e3d0] border-r-2 cursor-pointer text-[15px] bg-[#181923] p-2 pl-8 hover:bg-[#181923] hover:border-[#42e3d0] hover:border-r-2 hover:text-white  duration-50 "

    

    return(
        <nav className="w-full">
        <span className="text-white uppercase text-[13px] mx-4 font-bold">MENÜ</span>
            <ul className="w-full">
                {pages.map(p =>{
                    return <li className={p.active == 1 ? activeMenu : normalMenu} key={p.id}><a className="flex gap-2 items-center w-full" href={p.url}>{p.icon} {p.name}</a></li>;
                })}
                
            </ul>
        </nav>
    )
}