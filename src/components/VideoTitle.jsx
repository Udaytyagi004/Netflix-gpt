import { FaCircleInfo } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";


const VideoTitle = ({title,description}) =>{

    return (
        <div className=" p-2 w-screen aspect-video text-white bg-black z-20">
            <div className="absolute top-[12%] left-[8%]"><h1 className="font-bold text-4xl">{title}</h1>
            <p className="w-1/3 my-4">{description}</p>
            <div className="flex ">
                <button className="flex justify-center items-center bg-white text-black px-6 py-2 rounded-lg hover:bg-red-600 m-2">
                    <FaPlay /> <span className="mx-2">Play</span></button>
                <button className="flex justify-center items-center bg-gray-500  text-white px-6 py-2 rounded-lg m-2">
                    <FaCircleInfo /><span className="mx-2">More info</span></button>
            </div></div>
       </div>
    )
};
export default VideoTitle;