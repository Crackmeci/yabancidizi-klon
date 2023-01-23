import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
export default function GreatSeries(){
    const nices = [
        {
            id:1,
            image: './assets/nice/la-casa-de-papel.jpg'
        },
        {
            id:2,
            image: './assets/nice/the-terminal-list.jpg'
        },
        {
            id:3,
            image: './assets/nice/wednesday.jpg'
        },
        {
            id:4,
            image: './assets/nice/the-witcher.jpg'
        },
        {
            id:5,
            image: './assets/nice/arcane-league-of-legends.jpg'
        },
        {
            id:6,
            image: './assets/nice/the-boys.jpg'
        },
        {
            id:7,
            image: './assets/nice/westworld.jpg'
        },
        {
            id:8,
            image: './assets/nice/squid-game.jpg'
        }
    ]
    return(
        <div className="px-4 mt-4 mb-2">
        <h2 className="text-white text-[20px] font-semibold mb-2 capitalize">
          Dikkate Değer Diziler
        </h2>
        <div className="flex flex-wrap w-full gap-4  max-[640px]:flex-col">
            {nices.map(nice => {
                return(
                    <div className="relative cursor-pointer group flex flex-[23%] p-1 bg-[#1e2029]  max-[640px]:flex-[100%]" key={nice.id}>
                        <div className='w-full h-full left-0 top-0 absolute z-50 bg-[#000000] opacity-[0.20]'></div>
                        <div className="overflow-hidden">
                            <img className="group-hover:scale-105 duration-300" src={nice.image} alt="" />
                        </div>
                    </div>
                )
            }) }
        </div>
        <h2 className="text-white text-[20px] font-semibold mb-2 mt-6 text-center">Aradığınız diziyi bulamadınız mı?</h2>
        <button className="text-[#9b9dab] w-full mt-4 rounded h-[42px] block bg-[#1e2029] font-normal text-[14px]"><FontAwesomeIcon icon={faHashtag} /> Alfabeye göre tüm diziler</button>
        </div>
    );
}