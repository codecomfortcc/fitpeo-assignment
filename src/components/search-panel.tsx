import { Plus, Search } from "lucide-react"
import { Input } from "./ui/input"
import { FaBell } from "react-icons/fa"
import { useIsMobile } from "@/hooks/use-mobile"
const SearchPanel = () => {
  const isMobile = useIsMobile()
  return (
    <div className="flex items-center pr-6">
    <div className="my-5 mx-2 relative grow">
      <Search className="absolute top-[10px] w-5 h-5 left-4 text-blue-800"/>
      <Input className="w-full focus:outline-none focus:ring-none px-12 focus:border-none focus:shadow-none h-10" placeholder="Search"/>
      <FaBell className="absolute top-[10px] w-5 h-5 right-3 text-blue-800"/>
    </div>
    {
      isMobile && <div className="flex gap-2 ">
        <div className="min-w-9 min-h-9 w-9 h-9 bg-sky-400 rounded-md mr-2 flex items-center justify-center cursor-pointer hover:bg-sky-300 transition-colors duration-200">
        <span>🧔‍♂️</span>
        </div>
      <div className="min-w-9 min-h-9 w-9 h-9 bg-blue-800 rounded-md mr-2 flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors duration-200">
        <Plus className="w-6 h-6 text-white"/>
      </div>
      </div>
    }
    </div>
  )
}

export default SearchPanel
