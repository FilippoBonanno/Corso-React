


function Card({ title, description, imgUrl }) {


    return (
        <>
            <div className="rounded-md bg-zinc-950">
                <img className="w-full" src={imgUrl} alt="" />
                <div className="flex flex-col p-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-gray-500">{description}</p>
                </div>
            </div>


        </>
    )
}

export default Card
