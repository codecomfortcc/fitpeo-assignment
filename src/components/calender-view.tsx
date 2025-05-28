import { useState, useEffect } from 'react';
import CalendarHeader from './calendar-header';
import WeekView from './week-view';
import CalendarDetailView from './calendar-detail-view';
import { type Appointment, type WeekDay } from '@/types/calendar'; 
import { getStartOfWeek, getWeekDates, formatDayName, isSameDay, getTimeSlots } from '@/utils/date-utils';


interface CalendarProps {
  appointments?: Appointment[];
  onDateSelect?: (date: Date, appointments: Appointment[]) => void;
}

const Calendar = ({ appointments = [], onDateSelect }: CalendarProps) => {
  const [currentCalendarDateView] = useState(new Date()); 
  const [weekStart, setWeekStart] = useState<Date>(getStartOfWeek(new Date()));
  const [weekDays, setWeekDays] = useState<WeekDay[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedAppointments, setSelectedAppointments] = useState<Appointment[]>([]);

  const processAppointments = (apps: Appointment[]): Appointment[] => {
    return apps.map(app => {

      if (app.processedDate) return app;
      const processedDate = new Date(app.dateTime);
      return { ...app, processedDate };
    });
  };

  useEffect(() => {
    const weekDates = getWeekDates(weekStart);
    const allProcessedAppointments = processAppointments(appointments);

    const days: WeekDay[] = weekDates.map((date: Date) => {
      const dayAppointments = allProcessedAppointments.filter(app =>
        app.processedDate && isSameDay(app.processedDate, date)
      );

      const sortedDayAppointments = dayAppointments.sort((a, b) => {
        const timeA = a.processedDate ? a.processedDate.getTime() : 0;
        const timeB = b.processedDate ? b.processedDate.getTime() : 0;
        return timeA - timeB;
      });
      
      const timeSlotsForDay = getTimeSlots(sortedDayAppointments, date);

      return {
        dayName: formatDayName(date),
        dayNumber: date.getDate(),
        date: new Date(date), 
        appointments: sortedDayAppointments,
        timeSlots: timeSlotsForDay,
      };
    });
    
    setWeekDays(days);
  }, [weekStart, appointments]); 

  const goToPrevWeek = () => {
    const newStart = new Date(weekStart);
    newStart.setDate(newStart.getDate() - 7);
    setWeekStart(newStart);
  };

  const goToNextWeek = () => {
    const newStart = new Date(weekStart);
    newStart.setDate(newStart.getDate() + 7);
    setWeekStart(newStart);
  };

  const handleDateSelect = (date: Date, dayAppointments: Appointment[]) => {
    setSelectedDate(date);
    setSelectedAppointments(dayAppointments);
    if (onDateSelect) {
      onDateSelect(date, dayAppointments);
    }
  };

  return (
    <div className="px-3">
      <CalendarHeader 
        currentDate={weekStart} 
        onPrevWeek={goToPrevWeek}
        onNextWeek={goToNextWeek}
      />
      
      <WeekView 
        weekDays={weekDays}
        currentDate={currentCalendarDateView} 
        onDateSelect={handleDateSelect}
      />
      
      {selectedDate && (
        <CalendarDetailView
          date={selectedDate}
          appointments={selectedAppointments}
          onClose={() => setSelectedDate(null)}
        />
      )}
    </div>
  );
};

export default Calendar;
