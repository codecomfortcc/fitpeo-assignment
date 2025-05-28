
import { HealthStatusGrid } from './health-status-grid';
import { healthData } from '@/data/health-data';
import AnatomySkeleton from './anotomy-skeleton';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const AnatomySection = () => {
  return (
    <div className="bg-white rounded-lg pr-6 mr-4">
      <div className="flex  justify-between mb-5">
            <h3 className="text-lg grow w-full  font-semibold text-blue-800 mb-2">Dashboard</h3>
           <Select >
            <SelectTrigger className="outline-none border-none ring-none font-semibold text-blue-800 ">
              <SelectValue placeholder="This Week" />
            </SelectTrigger>
            <SelectContent className='shadow-none'>
                <SelectItem value="this-week">This week</SelectItem>
                 <SelectItem value="previous-week">Prev week</SelectItem>
                <SelectItem value="next-week">Next week</SelectItem>
             
            </SelectContent>
           </Select>
          </div>
      <div className="relative">
        <div className="flex justify-around gap-3 lg:gap-5 max-md:flex-col flex-warp ">
       
          <AnatomySkeleton className="grow bg-[#f6faff] rounded-lg aspect-[9/16] max-h-screen min-w-[200px]  lg:max-w-[300px] "/>    
          <HealthStatusGrid items={healthData} className='bg-[#f6faff] min-w-[200px]  select-none cursor-pointer px-4 ' />
    
        </div>
        
        <div className="mt-6 flex justify-end">
          <button className="flex items-center text-blue-600 text-sm font-medium">
            Details
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
