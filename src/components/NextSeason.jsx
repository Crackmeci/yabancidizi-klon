export default function NextSeason(){
    const nonPublished = "rounded-full border-[4px] border-[#32dde9] mb-2";
    const published = "rounded-full border-[4px] border-[#6d7080] mb-2";

    const series = [
        {
            id : 1,
            image: './assets/carnival-row_thumb.jpg',
            name: 'Carnival Row',
            season: 2,
            status : 0
        },
        {
            id : 2,
            image: './assets/you-izle_thumb.jpg',
            name: 'YOU',
            season: 4,
            status : 0
        },
        {
            id : 3,
            image: './assets/lupin-izle_thumb.jpg',
            name: 'Lupin',
            season: 3,
            status : 0
        },
        {
            id : 4,
            image: './assets/how-i-met-your-father_thumb.jpg',
            name: 'How I Met Your Father',
            season: 2,
            status : 0
        },
        {
            id : 5,
            image: './assets/sahmaran_thumb.jpg',
            name: 'Şahmaran',
            season: 2,
            status : 0
        },
        {
            id : 6,
            image: './assets/hunters-2020_thumb.jpg',
            name: 'Hunters(2020)',
            season: 2,
            status : 1
        },
        {
            id : 7,
            image: './assets/ottoman-rising_thumb.jpg',
            name: 'Rise of Empires: Ottoman',
            season: 2,
            status : 1
        },
        {
            id : 8,
            image: './assets/alice-in-borderland_thumb.jpg',
            name: 'Alice in Borderland',
            season: 2,
            status : 1
        }
    ]

    return(
        <div className="flex-col mt-8 px-8">
            <h2 className="text-white text-[20px] font-semibold mb-2">Gelecek Sezon Fragmanları</h2>
            <div className="flex gap-4 mt-4 w-full max-[640px]:flex-wrap">
            {series.map(serie => {
                return <div key={serie.id} className="relative flex-col align-middle text-center text-[15px] w-[110px] overflow-hidden max-[640px]:w-[calc(48%)]">
                    <div className="relative flex justify-center">
                        <img className={serie.status == 1 ? published : nonPublished} src={serie.image}/>
                        {serie.status == 1 ? <span className="absolute bg-[#42e3d0] px-5 h-[27px] w-[90px] justify-center flex items-center border-[2px] border-black text-black text-[11px] font-semibold bottom-0 z-50">Yayınlandı</span> : "" }
                    </div>
                    <h2 className="text-white text-[14px]">{serie.name.length > 13 ? serie.name.slice(0,13) + '...' : serie.name }</h2>
                    <p className="text-[11px] text-[#6d7080]">Sezon {serie.season}</p>
                </div>
            })}
            </div>
        </div>
    );
}