import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LegendarySeries(){
    const series = [
        {
            id: 1,
            name :"Breaking Bad",
            imdb: '9.5',
            year: 2008,
            image: './assets/legendary/breaking-bad.jpg'
        },
        {
            id: 2,
            name :"Sherlock",
            imdb: '9.2',
            year: 2010,
            image: './assets/legendary/sherlock.jpg'
        },
        {
            id: 3,
            name :"The Sopranos",
            imdb: '9.2',
            year: 1999,
            image: './assets/legendary/the-sopranos.jpg'
        },
        {
            id: 4,
            name :"Arcane",
            imdb: '9.1',
            year: 2021,
            image: './assets/legendary/arcane-league-of-legends.jpg'
        },
        {
            id: 5,
            name :"Fargo",
            imdb: '9.0',
            year: 2014,
            image: './assets/legendary/fargo.jpg'
        },
        {
            id: 6,
            name :"Friends",
            imdb: '8.9',
            year: 1994,
            image: './assets/legendary/friends.jpg'
        },
        {
            id: 7,
            name :"Stranger Things",
            imdb: '8.9',
            year: 2016,
            image: './assets/legendary/stranger-things.jpg'
        },
        {
            id: 8,
            name :"Peaky Blinders",
            imdb: '8.8',
            year: 2013,
            image: './assets/legendary/peaky-blinders.jpg'
        },
    ]

    return(
        <div className="ml-[2%] w-[34%] px-4 mt-4 mb-2 max-[640px]:w-[100%]">
            <h2 className="text-white text-[20px] font-semibold mb-2 capitalize">
                Olmazsa Olmaz Diziler
            </h2>
            <div className="flex-col w-full gap-2 ">
                {series.map(serie =>{
                    return(
                        <div key={serie.id} className="flex gap-2 font-normal w-full mb-3 items-center rounded-sm h-[60px] bg-[#1e2029] py-[6px] px-[10px]">
                            <div>
                                <img className="w-[44px] h-[44px] rounded-sm m-2 mr-0" src={serie.image} alt="" />
                            </div>

                            <div className="flex flex-col">
                                <h2 className="text-white text-[14px]">{serie.name}</h2>
                                <div className="flex mt-1">
                                    <span className="flex gap-1 items-center text-[14px] text-[#fbbc00]">
                                        <FontAwesomeIcon className="fill-[#fbbc00]" icon={faStar}/>
                                        <p className="mt-[2px]">{serie.imdb}</p>
                                    </span>
                                    <span className="ml-1 mt-1 text-[#6d7080] text-[12px]">· {serie.year}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}