export default function Collections(){
    const collections = [
        {
            id:1,
            image: './assets/collections/vikings-valhalla.jpg',
            text: '2022 Yabancı Dizi Sitesinin Tavsiyeleri',
            count : 15,
            author: "Profesör",
            author_image: "./assets/collections/15b9fb9443505e.jpg",
            color: 'first'
        },
        {
            id:2,
            image: './assets/collections/the-blacklist.jpg',
            text: 'Yabancı Dizi Önerileri 2019',
            count : 11,
            author: "Profesör",
            author_image: "./assets/collections/15b9fb9443505e.jpg",
            color: 'second'
        },
        {
            id:3,
            image: './assets/collections/the-good-the-bad-and-the-ugly.jpg',
            text: "2000'lerden Önce Yayınlanmış En iyi Filmler",
            count : 15,
            author: "Profesör",
            author_image: "./assets/collections/15b9fb9443505e.jpg",
            color: 'triple'
        },
        {
            id:4,
            image: './assets/collections/how-i-met-your-mother.jpg',
            text: 'En İyi Amerika Yapımı Komedi Dizileri',
            count : 10,
            author: "Berlin",
            author_image: "./assets/collections/1637646c433205.jpg",
            color: 'quadra'
        }
    ]
    return(
        <div className="px-4 mt-4 mb-2">
            <h2 className="text-white text-[20px] font-semibold mb-2 capitalize">
                Öne Çıkan Koleksiyonlar
            </h2>

            <div className="flex gap-6  max-[640px]:flex-col">
                {collections.map(collection => {
                    return(
                        <div key={collection.id} className="group relative w-[25%] flex-[25%] h-[180px]  max-[640px]:w-full" >
                            <div className={"absolute w-full z-50 h-full" + " " + collection.color}></div>
                            <div className="h-full w-full overflow-hidden">
                                <img className="w-full h-full group-hover:scale-105 duration-300" src={collection.image} alt="" />
                            </div>
                            <div className="z-50 flex w-full h-full absolute left-0 top-0 p-4">
                                <div className="flex gap-2 text-white text-[12px] items-center h-[24px]">
                                    <img className="block w-[24px] h-[24px] rounded-full" src={collection.author_image} alt="" />
                                    <span className="block w-[24px] h-[24px] mt-1">{collection.author}</span>
                                </div>
                                <div className="flex-col absolute bottom-4 left-4">
                                    <span className="block text-[12px] text-white">{collection.count}  Adet</span>
                                    <h2 className="text-[20px] leading-[1.24] text-white">{collection.text}</h2>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}