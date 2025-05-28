import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"

interface IconsSectionProps{
 className?:string 
}
const IconsSection = ({className}:IconsSectionProps) => {
  return (
    <div className={cn("max-sm:hidden w-full flex item-center my-3 mr-8",className)}>
      <div className="w-full grow">
        
      </div>
    <div className="flex gap-2 self-end ">
        <div className="min-w-9 min-h-9 w-9 h-9 bg-sky-400 rounded-md mr-2 flex items-center justify-center cursor-pointer hover:bg-sky-300 transition-colors duration-200">
        <span>🧔‍♂️</span>
        </div>
      <div className="min-w-9 min-h-9 w-9 h-9 bg-blue-800 rounded-md mr-2 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors duration-200">
        <Plus className="w-6 h-6 text-white"/>
      </div>
      </div>
    </div>
  )
}

export default IconsSection
