import { BsFire } from "react-icons/bs";

const TrendingCard = ({image}) => {
  return (
    <div className="flex flex-col items-center mt-[2rem]" >
        <div className="rounded-2xl cursor-pointer overflow-hidden  " >
            <img src={image} className="hover:scale-110 duration-300 " />
        </div>

        <div className="flex items-center space-x-1 mt-4 " >
            <BsFire />
            <p className="font-medium" >40 Followers</p>
        </div>
    </div>
  )
}

export default TrendingCard