import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine,faHome,faCalendar,faTelevision,faClapperboard,faComment,faCompactDisc,faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCompass, faChartBar, faUser } from "@fortawesome/free-regular-svg-icons";

export const pages = [
    {
        id: 1,
        icon: <FontAwesomeIcon className="text-[#42e3d0]" icon={faHome}/>,
        name: "Anasayfa",
        active : 1,
        url: "anasayfa"
    },
    {
        id: 2,
        icon: <FontAwesomeIcon icon={faCompass}/>,
        name: "Keşfet",
        active : 0,
        url: "kesfet"
    },
    {
        id: 3,
        icon: <FontAwesomeIcon icon={faChartLine}/>,
        name: "Trendler",
        active : 0,
        url: "trendler"
    },
    {
        id: 4,
        icon: <FontAwesomeIcon icon={faCalendar}/>,
        name: "Takvim",
        active : 0,
        url: "takvim"
    },
    {
        id: 5,
        icon: <FontAwesomeIcon icon={faTelevision}/>,
        name: "TV Dizileri",
        active : 0,
        url: "tv-dizileri"
    },
    {
        id: 6,
        icon: <FontAwesomeIcon icon={faClapperboard}/>,
        name: "Sinema Filmleri",
        active : 0,
        url: "sinema-filmleri"
    },
    {
        id: 7,
        icon: <FontAwesomeIcon icon={faComment}/>,
        name: "Tartışmalar",
        active : 0,
        url: "tartismalar"
    },
    {
        id: 8,
        icon: <FontAwesomeIcon icon={faCompactDisc}/>,
        name: "Koleksiyonlar",
        active : 0,
        url: "koleksiyonlar"
    },
    {
        id: 9,
        icon: <FontAwesomeIcon icon={faUsers}/>,
        name: "Birlikte İzle",
        active : 0,
        url: "birlikte-izle"
    }
];