import { cn } from "@/lib/utils"
import skeleton from '@/assets/skeleton.png'
import { FaCircle } from "react-icons/fa"
interface AnatomySkeletonProps{
  className?:string
}
const AnatomySkeleton = ({className}:AnatomySkeletonProps) => {
  return (
          <div className={cn("relative overflow-hidden",className)}>
               <img 
                 src={skeleton}
                 alt="Human Anatomy" 
                 className=" object-cover "
               />
               
               <div className="absolute top-[25%] flex items-center  left-[56%]">
               <FaCircle className="text-red-500  w-2 h-2 mr-1"/>
                 <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                   <span className="mr-1">❤️</span> Healthy Heart
                 </div>
               </div>
   
    
               <div className="absolute flex items-center top-[65%] left-[40%]">
                <FaCircle className="text-sky-400  w-2 h-2 mr-1"/>
                 <div className="bg-sky-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                   <span className="mr-1">👣</span> Healthy Leg
                 </div>
               </div>
             </div>
  )
}

export default AnatomySkeleton
