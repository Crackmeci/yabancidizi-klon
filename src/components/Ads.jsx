export default function Ads(){
    
    const ads = [
        {
            id:1,
            image: "./assets/bteyd.gif"
        },
        {
            id:2,
            image: "./assets/grnd.gif"
        },
        {
            id:3,
            image: "./assets/mstb.gif"
        }
    ]

    return(
        <div className="px-8 mb-8 max-[640px]:hidden">
            {ads.map(ad => {
                return (
                <div className=" last:border-none  py-1 border-b-2 border-[#42e4d0]" key={ad.id}>
                    <img src={ad.image} />
                </div>
                )
            })}

        </div>
    )
}