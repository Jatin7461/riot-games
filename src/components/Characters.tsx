
type characterDetails = {
    name: string,
    description: string,
    image: string,
    bgColor: string
}


const Characters = ({ name, description, image, bgColor }: characterDetails) => {

    return <div className={` flex flex-col flex-1 bg-red-300 char-card justify-end m-2 ${bgColor}`} >
        <img className="char-image" src={image} />
        <p className="font-semibold text-xl mb-2 ml-4 character-name text-white">{name}</p>
        <p className="text-white mx-4 mb-8 text-sm">{description}</p>
    </div >

}

export default Characters