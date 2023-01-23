export default function Trends(){
    const trends = [
        {
            id:1,
            name: "The Vampire Diaries",
            goal: 120902
        },
        {
            id:2,
            name: "Teen Wolf",
            goal: 105356
        },
        {
            id:3,
            name: "Vikings: Valhalla",
            goal: 100607
        },
        {
            id:4,
            name: "Breaking Bad",
            goal: 99326
        },
        {
            id:5,
            name: "Ay'ın Düşüşü",
            goal: 92643
        },
        {
            id:6,
            name: "Rick and Morty",
            goal: 81081
        },
        {
            id:7,
            name: "Ginny & Georgia",
            goal: 77248
        },
        {
            id:8,
            name: "The Menu",
            goal: 77215
        },
        {
            id:9,
            name: "Wednesday",
            goal: 76780
        },
        {
            id:10,
            name: "How I Met Your Mother",
            goal: 120902
        }
    ]
    return(
        <div className="px-8 mt-4 pt-4 border-t-[1px] border-[#1e2029]">
            <h2 className="uppercase text-white text-[12px] font-semibold mb-4">Haftalık Trendler</h2>
            {trends.map(trend=>{
                return(
                    <div className="mb-1" key={trend.id}>
                        <h2 className="text-[#9b9dab] text-[13px] hover:text-white cursor-pointer">#{trend.name.length > 19 ? trend.name.slice(0,16)+"..." : trend.name}</h2>
                        <span className="text-[12px] text-[#a8aab9] opacity-[0.5]">+{trend.goal}</span>
                    </div>
                )
            })}
        </div>
    )
}