import { type Appointment, type WeekDay, } from "../types/calendar"; 

interface WeekViewProps {
  weekDays: WeekDay[];
  currentDate?: Date;
  onDateSelect: (date: Date, appointments: Appointment[]) => void;
}

export default function WeekView({ weekDays, onDateSelect }: WeekViewProps) {
  const today = new Date(); 
  const isToday = (date: Date) => {
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const hasAppointments = (day: WeekDay) => {
    return day.appointments.length > 0;
  };

  return (
    <div className="grid grid-cols-7 gap-3">
      {weekDays.map((day, dayIndex) => {
        const dayHasAppointments = hasAppointments(day); 
        return (
          <div key={`day-${dayIndex}`} className={`flex flex-col px-2 rounded-md ${
              isToday(day.date) 
                ? 'bg-indigo-100 border border-blue-300' 
                : 'bg-transparent hover:bg-gray-100'
            }`
          }>
            <div
              className={`text-center px-3 py-4 mb-3 rounded-lg cursor-pointer transition-all duration-200`}
              onClick={() => onDateSelect(day.date, day.appointments)}
            >
              <div className="text-xs font-medium text-gray-500 mb-1">
                {day.dayName}
              </div>
              <div className={`text-xl font-bold ${dayHasAppointments ? 'text-indigo-700' : 'text-[#2D2851]'}`}>
                {day.dayNumber}
              </div>
            </div>
            
            <div className="space-y-3">
              {Array(3).fill(null).map((_, slotIndex) => {
                const slot = slotIndex < day.timeSlots.length ? day.timeSlots[slotIndex] : null;
                return (
                  <div
                    key={`slot-${dayIndex}-${slotIndex}`}
                    onClick={() => onDateSelect(day.date, day.appointments)} 
                    className={`py-1 px-3 text-center rounded-sm cursor-pointer text-sm font-medium transition-all duration-200 flex items-center justify-center ${
                      slot?.appointment 
                        ? slot.isNextAppointment 
                          ? 'bg-indigo-700 text-white shadow-lg' 
                          : 'bg-transparent text-indigo-800 hover:bg-indigo-200' 
                        : 'bg-transparent text-gray-400 hover:bg-transparent' 
                    }`}
                  >
             
                    {slot?.appointment ? slot.time : '—'}
                  </div >
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
