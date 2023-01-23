import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function LastEpisode() {
  const episodes = [
    {
      id: 1,
      name: "Truth Be Told",
      image: "./assets/last/truth-be-told.jpg",
      season: 3,
      episode: 1,
      today: 1,
      subtitle: 1 
    },
    {
      id: 2,
      name: "Anne Rice's Mayfair Witches",
      image: "./assets/last/anne-rice-s-mayfair-witches.jpg",
      season: 1,
      episode: 3,
      today: 1,
      subtitle: 1 
    },
    {
      id: 3,
      name: "Your Honor",
      image: "./assets/last/your-honor.jpg",
      season: 2,
      episode: 2,
      today: 1,
      subtitle: 1 
    },
    {
      id: 4,
      name: "Walker",
      image: "./assets/last/walker.jpg",
      season: 3,
      episode: 9,
      today: 1,
      subtitle: 1 
    },
    {
      id: 5,
      name: "En Place",
      image: "./assets/last/en-place.jpg",
      season: 1,
      episode: 6,
      today: 1,
      subtitle: 1 
    },
    {
      id: 6,
      name: "En Place",
      image: "./assets/last/en-place.jpg",
      season: 1,
      episode: 1,
      today: 1,
      subtitle: 1 
    },
    {
      id: 7,
      name: "Bling Empire: New York",
      image: "./assets/last/bling-empire-new-york.jpg",
      season: 1,
      episode: 8,
      today: 1,
      subtitle: 1 
    },
    {
      id: 8,
      name: "Bling Empire: New York",
      image: "./assets/last/bling-empire-new-york.jpg",
      season: 1,
      episode: 1,
      today: 1,
      subtitle: 1 
    },
    {
      id: 9,
      name: "Fauda",
      image: "./assets/last/fauda.jpg",
      season: 4,
      episode: 12,
      today: 1,
      subtitle: 1 
    },
    {
      id: 10,
      name: "Fauda",
      image: "./assets/last/fauda.jpg",
      season: 4,
      episode: 1,
      today: 1,
      subtitle: 1 
    },
    {
      id: 11,
      name: "Şahmaran",
      image: "./assets/last/sahmaran.jpg",
      season: 1,
      episode: 8,
      today: 1,
      subtitle: 0
    },
    {
      id: 12,
      name: "Şahmaran",
      image: "./assets/last/sahmaran.jpg",
      season: 1,
      episode: 1,
      today: 1,
      subtitle: 0
    },
    {
      id: 13,
      name: "The Legend of Vox Machina",
      image: "./assets/last/the-legend-of-vox-machina.jpg",
      season: 2,
      episode: 3,
      today: 1,
      subtitle: 1 
    },
    {
      id: 14,
      name: "The Legend of Vox Machina",
      image: "./assets/last/the-legend-of-vox-machina.jpg",
      season: 2,
      episode: 2,
      today: 1,
      subtitle: 1 
    },
    {
      id: 15,
      name: "The Legend of Vox Machina",
      image: "./assets/last/the-legend-of-vox-machina.jpg",
      season: 2,
      episode: 1,
      today: 1,
      subtitle: 1 
    },
    {
      id: 16,
      name: "Black Mafia Family",
      image: "./assets/last/black-mafia-family.jpg",
      season: 2,
      episode: 3,
      today: 1,
      subtitle: 1 
    },
    {
      id: 17,
      name: "Hudson & Rex",
      image: "./assets/last/hudson-rex.jpg",
      season: 5,
      episode: 11,
      today: 1,
      subtitle: 1 
    },
    {
      id: 18,
      name: "The L Word: Generation Q",
      image: "./assets/last/the-l-word-generation-q.jpg",
      season: 3,
      episode: 10,
      today: 1,
      subtitle: 1 
    },
    {
      id: 19,
      name: "Walker Independence",
      image: "./assets/last/walker-independence.jpg",
      season: 1,
      episode: 9,
      today: 1,
      subtitle: 1 
    },
    {
      id: 20,
      name: "Servant",
      image: "./assets/last/servant.jpg",
      season: 4,
      episode: 2,
      today: 1,
      subtitle: 1 
    },
    {
      id: 21,
      name: "Les combattantes",
      image: "./assets/last/les-combattantes.jpg",
      season: 1,
      episode: 8,
      today: 0,
      subtitle: 1 
    },
    {
      id: 22,
      name: "Les combattantes",
      image: "./assets/last/les-combattantes.jpg",
      season: 1,
      episode: 1,
      today: 0,
      subtitle: 1 
    },
    {
      id: 23,
      name: "Junji Ito Maniac: Japanese Tales of the Macabre",
      image: "./assets/last/jitm.jpg",
      season: 1,
      episode: 12,
      today: 0,
      subtitle: 1 
    },
    {
      id: 24,
      name: "Junji Ito Maniac: Japanese Tales of the Macabre",
      image: "./assets/last/jitm.jpg",
      season: 1,
      episode: 1,
      today: 0,
      subtitle: 1 
    },
    {
      id: 25,
      name: "Criminal Minds",
      image: "./assets/last/criminal-minds.jpg",
      season: 16,
      episode: 7,
      today: 0,
      subtitle: 1 
    },
    {
      id: 26,
      name: "Gossip Girl",
      image: "./assets/last/gossip-girl.jpg",
      season: 2,
      episode: 9,
      today: 0,
      subtitle: 1 
    },
    {
      id: 27,
      name: "That '90s Show",
      image: "./assets/last/that-90s-show.jpg",
      season: 1,
      episode: 10,
      today: 0,
      subtitle: 1 
    },
    {
      id: 28,
      name: "That '90s Show",
      image: "./assets/last/that-90s-show.jpg",
      season: 1,
      episode: 1,
      today: 0,
      subtitle: 1 
    },
  ];
  
  const today = "absolute right-[-10px] z-50 px-[5px] py-[2px] top-[-10px] rounded-sm	font-semibold bg-[#42e4d0] text-[12px] text-[#14161d]";
  const yesterday = "absolute right-[-10px] z-50 px-[5px] py-[2px] top-[-10px] rounded-sm	font-semibold bg-[#14161d] text-[12px] text-[#6d7080]";

  return (
    <div className="px-4 mt-4 mb-2">
      <h2 className="text-white text-[20px] font-semibold mb-2 capitalize">
        Yabancı Dizi Son Bölümler
      </h2>
      <div className="flex flex-wrap gap-5 max-[640px]:flex-col">
        {episodes.map(episode => {
            return(
                <div key={episode.id} className="bg-[#1e2029] flex px-2 py-2 gap-2 flex-[20%] h-[60px] items-center relative max-[640px]:flex-[100%]">
                  <span className={episode.today == 1 ? today : yesterday}>{episode.today == 1 ? "Bugün" : "Dün" }</span>
                    <div className="h-[44px] w-[44px]">
                        <img src={episode.image} alt="" />
                    </div>
                    <div className="flex-1 flex-col">
                        <h2 className="text-white text-[14px] mt-[5px]">{episode.name.length > 21 ? episode.name.slice(0,21)+"..." : episode.name}</h2>
                        <div className="w-full relative flex justify-between mt-1">
                            <span className="text-[12px] text-[#6d7080]">Sezon {episode.season} · Bölüm {episode.episode}</span>
                            <img className="w-[21px]" src={episode.subtitle == 1 ? './assets/subtitle_grey.svg' : './assets/no_subtitle_grey.svg'}/>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
      <button className="text-[#9b9dab] w-full mt-4 rounded h-[42px] block bg-[#1e2029] font-normal text-[14px] mb-8"><FontAwesomeIcon icon={faPlus}/> Daha Fazla Göster</button>
    </div>
  );
}
