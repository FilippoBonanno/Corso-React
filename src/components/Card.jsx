


function Card({ title, description, imgUrl, isVisited, children }) {


    return (
        <>
            <div className="rounded-md bg-zinc-950">
                <img className="w-full" src={imgUrl} alt="" />
                <div className="flex flex-col p-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-gray-500">{description}</p>
                    <span>{isVisited ? "Visitata" : "Non Visitata"}</span>

                    {/* SE VISITATA E ALLORA FAI QUESTO
                    {isVisited && <span> Visitata </span>} */}

                    {/* SE NON VISITATA E ALLORA FAI QUESTO
                    {!isVisited && <span> Non Visitata </span>} */}

                    <p className="text-green-500">{children}</p>

                </div>
            </div>



        </>
    )
}

export default Card
