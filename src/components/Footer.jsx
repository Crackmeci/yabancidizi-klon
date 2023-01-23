import {
  faFacebookF,
  faTelegramPlane,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const medias = [
    {
      id: 1,
      name: "Facebook",
      text: "Beğen",
      icon: <FontAwesomeIcon icon={faFacebookF} />,
    },
    {
      id: 2,
      name: "Twitter",
      text: "Takip Et",
      icon: <FontAwesomeIcon icon={faTwitter} />,
    },
    {
      id: 3,
      name: "İnstagram",
      text: "Takip Et",
      icon: <FontAwesomeIcon icon={faInstagram} />,
    },
    {
      id: 4,
      name: "Telegram",
      text: "Takip Et",
      icon: <FontAwesomeIcon icon={faTelegramPlane} />,
    },
  ];

  const types = [
    {
      id: 1,
      type: "Aşk Dizileri",
    },
    {
      id: 2,
      type: "Fantastik Dizileri",
    },
    ,
    {
      id: 3,
      type: "Bilim Kurgu Dizileri",
    },
    ,
    {
      id: 4,
      type: "Komedi Dizileri",
    },
    ,
    {
      id: 5,
      type: "Mini Dizileri",
    },
    ,
    {
      id: 6,
      type: "Korku Filmleri",
    },
    ,
    {
      id: 7,
      type: "Aşk Filmleri",
    },
    ,
    {
      id: 8,
      type: "Komedi Filmleri",
    },
    ,
    {
      id: 9,
      type: "Aksiyon Filmleri",
    },
    ,
    {
      id: 10,
      type: "Animasyon Filmleri",
    },
  ];

  const frontSeriesMovies = [
    {
      id: 1,
      name: "Narcos: Mexico",
    },
    {
      id: 2,
      name: "The Blacklist",
    },
    {
      id: 3,
      name: "Venom",
    },
    {
      id: 4,
      name: "Titans",
    },
    {
      id: 5,
      name: "Kidding",
    },
    {
      id: 6,
      name: "La casa de papel",
    },
    {
      id: 7,
      name: "The Boys",
    },
    {
      id: 8,
      name: "Peaky Blinders",
    },
    {
      id: 9,
      name: "The Terminal List",
    },
    {
      id: 10,
      name: "Haunting of Hill House",
    },
    {
      id: 11,
      name: "Legacies",
    },
    {
      id: 12,
      name: "The Umbrella Academy",
    },
  ];

  const populerMoviesSeries = [
    {
      id: 1,
      name: "Dark",
    },
    {
      id: 2,
      name: "Friends",
    },
    {
      id: 3,
      name: "The Gifted",
    },
    {
      id: 4,
      name: "Sin Limites",
    },
    {
      id: 5,
      name: "Riverdale",
    },
    {
      id: 6,
      name: "Inside No. 9",
    },
    {
      id: 7,
      name: "Superman",
    },
    {
      id: 8,
      name: "Shazam",
    },
    {
      id: 9,
      name: "The Punisher",
    },
    {
      id: 10,
      name: "The Passage",
    },
    {
      id: 11,
      name: "Marvel's Daredevil",
    },
    {
      id: 12,
      name: "Doom Patrol",
    },
  ];

  return (
    <div className="footer w-full px-2 bg-[#14161d]">
      <div className="flex justify-between w-full items-center  max-[640px]:flex-col ">
        <img className="h-[80px] p-6 w-[210px] mb-2" src="assets/logo_beta.svg" />
        <div className="flex gap-8 mr-2 max-[640px]:flex-wrap max-[640px]:justify-center">
          {medias.map((media) => {
            return (
              <div key={media.id} className="flex gap-2 p-4 items-center max-[640px]:flex-[100%] max-[640px]:ml-8 max-[640px]:hover:bg-[#1e2029] duration-300">
                <div className="h-[48px] w-[48px] bg-[#1e2029] rounded-full grid place-items-center text-white text-[21px]">
                  {media.icon}
                </div>
                <div className="flex-col">
                  <h2 className="text-white text-[13px] font-semibold">
                    {media.name.toUpperCase()}
                  </h2>
                  <span className="text-[#6d7080] text-[14px]">
                    {media.text}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-6 mt-4 border-b-[1px] border-[#1e2029] pb-6">
        <div className="flex gap-20 max-[640px]:flex-col max-[640px]:mt-20">
          <div className="flex-col">
            <h2 className="uppercase font-semibold text-white text-[13px] mb-2">
              Popüler Türler
            </h2>
            <div className="flex gap-20">
              <div className="flex-col">
                {types.map((type) => {
                  return type.id < 6 ? (
                    <li key={type.id} className="list-none text-[13px] text-[#6d7080]">
                      {type.type}
                    </li>
                  ) : (
                    ""
                  );
                })}
              </div>
              <div className="flex-col">
                {types.map((type) => {
                  return type.id >= 6 ? (
                    <li key={type.id} className="list-none text-[13px] text-[#6d7080]">
                      {type.type}
                    </li>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex-col">
            <h2 className="uppercase font-semibold text-white text-[13px] mb-2">
              Öne Çıkan Dizi ve Filmler
            </h2>
            <div className="flex gap-20">
              <div className="flex-col">
                {frontSeriesMovies.map((front) => {
                  return front.id < 7 ? (
                    <li key={front.id} className="list-none text-[13px] text-[#6d7080]">
                      {front.name}
                    </li>
                  ) : (
                    ""
                  );
                })}
              </div>
              <div className="flex-col">
                {frontSeriesMovies.map((front) => {
                  return front.id >= 7 ? (
                    <li key={front.id} className="list-none text-[13px] text-[#6d7080]">
                      {front.name}
                    </li>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex-col">
            <h2 className="uppercase font-semibold text-white text-[13px] mb-2">
              Popüler Dizi ve Filmler
            </h2>
            <div className="flex gap-20">
              <div className="flex-col">
                {populerMoviesSeries.map((populer) => {
                  return populer.id < 7 ? (
                    <li key={populer.id} className="list-none text-[13px] text-[#6d7080]">
                      {populer.name}
                    </li>
                  ) : (
                    ""
                  );
                })}
              </div>
              <div className="flex-col">
                {populerMoviesSeries.map((populer) => {
                  return populer.id >= 7 ? (
                    <li key={populer.id} className="list-none text-[13px] text-[#6d7080]">
                      {populer.name}
                    </li>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 w-full h-[120px] max-[640px]:h-[200px]">
        <p className="text-[#6d7080] text-[12px]">
          yabancidizi.co adresinde yer alan tüm film ve diziler “video paylaşım
          siteleri” aracılığıyla paylaşılmaktadır. yabancidizi.co kendi
          sunucularında herhangi bir video içeriği barındırmadığından, bu konuda
          bir telif hakkı sorumluluğu kabul etmemektedir. Sitemizde bulunan bir
          içeriğin telif hakkını ihlal ettiğini düşünüyorsanız, telif haklarını
          ispat eden belgeler ile birlikte{" "}
          <a href="" className="font-semibold text-white hover:text-[#4be7ca]">
            admin@yabancidizi.org
          </a>{" "}
          e-posta adresinden kaldırılmasını talep edebilirsiniz.
        </p>
      </div>
    </div>
  );
}
