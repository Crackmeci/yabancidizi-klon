
export default function MainContent(){
    return(
        <div className='px-8 flex  max-[640px]:flex-col'>
            <div className='flex-column w-[50%]  max-[640px]:w-[100%]'>
                <h2 className='text-white text-[20px] font-semibold mb-2'>TV Dizileri</h2>
                <div className='group flex w-full overflow-hidden items-end relative'>
                    <div className='w-full h-full left-0 top-0 absolute z-50 bg-[#000000] opacity-[0.20]'></div>
                    <span className='overflow-hidden relative'>
                        <img className='w-full group-hover:scale-105 duration-300' src='./assets/vikings-valhalla.jpg'/>
                    </span>
                    <div className='absolute flex z-50 mb-2 mx-4 h-[90px] gap-4'>
                        <img className='pointer-events-none cursor-none' src='./assets/vikings-valhalla_newthumb.jpg'/>
                        <div className='flex-column justify-center h-full items-center pt-3'>
                            <span className='bg-[#000000d9] font-medium px-2 py-1 h-[24px] text-white text-[11px]'>12 Ocak</span>
                            <h2 className='text-white text-[14px] mb-1 mt-2'>Vikings: Valhalla</h2>
                            <p className='text-white text-[12px]'>Sezon 2 · Bölüm 8</p>
                        </div>
                    </div>
                </div>
                
                <div className='flex'>
                    <div className='group flex items-end w-[50%] overflow-hidden relative'>
                        <div className='w-full h-full left-0 top-0 absolute z-50 bg-[#000000] opacity-[0.20]'></div>
                        <span className='overflow-hidden relative'>
                            <img className='w-full group-hover:scale-105 duration-300' src='./assets/tulsa-king.jpg'/>
                        </span>
                        <div className='absolute flex-column  z-50 mb-4 mx-4'>
                            <span className='bg-[#000000d9] font-medium px-2 py-1 h-[24px] text-white text-[11px]'>08 Ocak</span>
                            <h2 className='text-white text-[14px] mb-1 mt-2'>Tulsa King</h2>
                            <p className='text-white text-[12px]'>Sezon 1 · Bölüm 9</p>
                        </div>
                    </div>
                    <div className='group flex items-end w-[50%] overflow-hidden relative'>
                        <div className='w-full h-full left-0 top-0 absolute z-50 bg-[#000000] opacity-[0.20]'></div>
                        <span className='overflow-hidden relative'>
                            <img className='w-full group-hover:scale-105 duration-300' src='./assets/ottoman-rising.jpg'/>
                        </span>
                        <div className='absolute flex-column z-50 mb-4 mx-4'>
                            <span className='bg-[#000000d9] font-medium px-2 py-1 h-[24px] text-white text-[11px]'>08 Ocak</span>
                            <h2 className='text-white text-[14px] mb-1 mt-2'>Rise of Empires: Ottoman</h2>
                            <p className='text-white text-[12px]'>Sezon 2 · Bölüm 6</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex-column w-[50%] max-[640px]:w-[100%] max-[640px]:mt-8'>
                <h2 className='text-white text-[20px] font-semibold mb-2'>Sinema Filmleri</h2>

                <div className='flex'>
                    <div className='group flex items-end w-[50%] overflow-hidden relative'>
                        <div className='w-full h-full left-0 top-0 absolute z-50 bg-[#000000] opacity-[0.20]'></div>
                        <span className='overflow-hidden relative'>
                            <img className='w-full group-hover:scale-105 duration-300' src='./assets/nope.jpg'/>
                        </span>
                        <div className='absolute flex-column z-50 mb-4 mx-4'>
                            <span className='bg-[#000000d9] font-medium px-2 py-1 h-[24px] text-white text-[11px]'>05 Ocak</span>
                            <h2 className='text-white text-[14px] mb-1 mt-2'>Hayır</h2>
                            <p className='text-white text-[12px]'>Bilim Kurgu, Gerilim, Gizem, Korku</p>
                        </div>
                    </div>
                    <div className='group flex items-end w-[50%] overflow-hidden relative'>
                        <div className='w-full h-full left-0 top-0 absolute z-50 bg-[#000000] opacity-[0.20]'></div>
                        <span className='overflow-hidden relative'>
                            <img className='w-full group-hover:scale-105 duration-300' src='./assets/the-menu.jpg'/>
                        </span>
                        <div className='absolute flex-column z-50 mb-4 mx-4'>
                            <span className='bg-[#000000d9] font-medium px-2 py-1 h-[24px] text-white text-[11px]'>05 Ocak</span>
                            <h2 className='text-white text-[14px] mb-1 mt-2'>The Menu</h2>
                            <p className='text-white text-[12px]'>Gerilim,Komedi,Korku</p>
                        </div>
                    </div>
                </div>

                <div className='group flex w-full overflow-hidden items-end relative'>
                    <div className='w-full h-full left-0 top-0 absolute z-50 bg-[#000000] opacity-[0.20]'></div>
                    <span className='overflow-hidden relative'>
                        <img className='w-full group-hover:scale-105 duration-300' src='./assets/beast.jpg'/>
                    </span>
                    <div className='absolute flex z-50 mb-2 mx-4 h-[90px] gap-4'>
                        <img className='pointer-events-none cursor-none' src='./assets/beast_newthumb.jpg'/>
                        <div className='flex-column justify-center h-full items-center pt-3'>
                            <span className='bg-[#188e7fa1] border-l-2 border-[#42e4d0] font-medium px-2 py-1 h-[24px] text-white text-[11px]'>Bugün</span>
                            <h2 className='text-white text-[14px] mb-1 mt-2'>Canavar</h2>
                            <p className='text-white text-[12px]'>Gerilim, Korku, Macera</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div> 
    )
}