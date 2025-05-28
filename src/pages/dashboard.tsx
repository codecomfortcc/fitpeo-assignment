import AnatomySection from '@/components/anatomy-section';
import CalendarView from '@/components/calender-view';
import UpcomingSchedule from '@/components/upcoming-schedule';
import ActivityFeed from '@/components/activity-feed';
import type { Appointment } from '@/types/calendar';
import { appointmentData } from '@/data/appointments';

import SearchPanel from '@/components/search-panel';
import IconsSection from '@/components/icons-section';
const Dashboard= () => {

  const handleDateSelect = (date: Date, appointments: Appointment[]) => {
    console.log('Selected date:', date);
    console.log('Appointments:', appointments);
  };
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 max-lg:mr-4 ">
        <div className=" ">
          <SearchPanel/>
          <AnatomySection />
          <ActivityFeed />
        </div>
        
        <div className="bg-[#f6faff] min-h-screen space-y-6">
          <IconsSection/>
          <CalendarView  appointments={appointmentData} onDateSelect={handleDateSelect} />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
