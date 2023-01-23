import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LastMovies(){
    const movies = [
        {
            id:1,
            name:"Jung_E",
            image: './assets/movies/jung_e.jpg',
            type: 'Aksiyon, Bilim Kurgu, Macera',
            subtitle:1,
            turkish:1,
            year:2023 ,
            imdb:"0.0"
        },
        {
            id:2,
            name:"American Traitor: The Trial of Axis Sally",
            image: './assets/movies/american-traitor-the-trial-of-axis-sally.jpg',
            type: 'Dram, Tarih',
            subtitle:1,
            turkish:1,
            year:2021 ,
            imdb:"5.5"
        },
        {
            id:3,
            name:"Zirve Ateşi",
            image: './assets/movies/summit-fever.jpg',
            type: 'Dram, Gerilim, Macera',
            subtitle:1,
            turkish:1,
            year:2022,
            imdb:'4.8'
        },
        {
            id:4,
            name:"Canavar",
            image: './assets/movies/beast.jpg',
            type: 'Gerilim, Korku, Macera',
            subtitle:1,
            turkish:1,
            year:2022,
            imdb:'5.6'
        },
        {
            id:5,
            name:"Laal Singh Chaddha",
            image: './assets/movies/laal-singh-chaddha.jpg',
            type:'Dram, Komedi, Romantik',
            subtitle:1,
            turkish:0,
            year:2022,
            imdb:'5.5'
        },
        {
            id:6,
            name:"Tehlikeli Oyun",
            image: './assets/movies/poker-face.jpg',
            type:'Aksiyon, Gerilim, Gizem, Suç',
            subtitle:1,
            turkish:0,
            year:2022,
            imdb:'5.1'
        },
        {
            id:7,
            name:"Özveri",
            image: './assets/movies/devotion.jpg',
            type:'Dram, Savaş, Tarih',
            subtitle:1,
            turkish:0,
            year:2022,
            imdb:'6.5'
        },
        {
            id:8,
            name:"The Braves",
            image: './assets/movies/entre-les-vagues.jpg',
            type:'Dram',
            subtitle:1,
            turkish:0,
            year:2022,
            imdb:'6.7'
        },

    ]

    return(
        <div className="w-[64%] px-4 mt-4 mb-2 max-[640px]:w-[100%] max-[640px]:ml-2">
            <h2 className="text-white text-[20px] font-semibold mb-2 capitalize">
                Son Eklenen Filmler
            </h2>

            <div className="flex flex-wrap gap-2 w-full">
                {movies.map(movie =>{
                    return(
                        <div key={movie.id} className="film flex-col mb-2 flex-[19%] h-[300px] bg-[#1e2029] max-[640px]:flex-[49%]">
                            <div className="relative h-[235px] w-[100%] max-[640px]:h-[300px]">
                                <img className="w-full h-full" src={movie.image} alt="" />
                                <div className="flex-col justify-between top-0 left-0 absolute w-full h-full bg-[#0000004d]">
                                    <div className="w-full flex justify-end">
                                        <div className="mr-2 flex items-center gap-1 mt-2">
                                            {movie.turkish == 1 ? 
                                            <img className="w-[21px] h-[16px]" src="./assets/tr.svg"/>
                                            : ""}
                                            
                                            {movie.subtitle == 1 ? 
                                            <div className="overflow-hidden w-[21px] h-[15px] flex items-center">
                                                <img className="w-[21px] bg-[#121212] overflow-hidden" src="./assets/subtitle_grey.svg"/>
                                            </div> : "" }
                                        </div>
                                    </div>
                                    <div className="absolute bottom-2 w-full flex justify-between items-center px-3">
                                        <div className="flex items-center text-[#fbbc00] gap-[2px]">
                                            <FontAwesomeIcon className="fill-[#fbbc00] text-[14px] " icon={faStar}/>
                                            <span className="text-[14px]">{movie.imdb}</span>
                                        </div>
                                        <span className="text-white text-[14px]">{movie.year}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[64px] px-[14px] py-[13px] flex-col">
                                <a className="block font-medium text-white text-[15px] hover:text-[#4be7ca]" href="">{movie.name.length > 17 ? movie.name.slice(0,13) + "..." : movie.name}</a>
                                <span className="block text-[13px] text-[#6d7080]">{movie.type.length > 20 ? movie.type.slice(0,16) + "..." : movie.type}</span>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}