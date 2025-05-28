import { appointmentData } from "@/data/appointments";
import type { Appointment, TimeSlot } from "@/types/calendar";



export const formatTime = (date: Date): string => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
};

export const formatDayName = (date: Date): string => {
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};

export const getStartOfWeek = (date: Date): Date => {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1);
  const result = new Date(date);
  result.setDate(diff);
  return result;
};

export const getWeekDates = (startDate: Date): Date[] => {
  const dates: Date[] = [];
  const currentDate = new Date(startDate);
  
  for (let i = 0; i < 7; i++) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  
  return dates;
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export  const getTimeSlots = (appointmentsForDay: Appointment[], dayDate: Date): TimeSlot[] => {
  const timeSlots: TimeSlot[] = [];
  const timeSet = new Set<string>();

  const now = new Date();

  let overallNextAppointmentId: string | null = null;
  const futureAppointments = appointmentData 
    .filter((app) => new Date(app.dateTime).getTime() > now.getTime())
    .sort((a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());

  if (futureAppointments.length > 0) {
    overallNextAppointmentId = futureAppointments[0].appointmentId;
  }

  appointmentsForDay.forEach(app => {
    const appointmentDateTime = new Date(app.dateTime);

    if (
      appointmentDateTime.getFullYear() === dayDate.getFullYear() &&
      appointmentDateTime.getMonth() === dayDate.getMonth() &&
      appointmentDateTime.getDate() === dayDate.getDate()
    ) {
      const time = appointmentDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
      
      if (!timeSet.has(time)) {
        timeSet.add(time);
        const isNext = app.appointmentId === overallNextAppointmentId;
        timeSlots.push({ time, appointment: app, isNextAppointment: isNext });
      }
    }
  });

  timeSlots.sort((a, b) => {
    return new Date(`1970-01-01T${a.time}`).getTime() - new Date(`1970-01-01T${b.time}`).getTime();
  });


  
    return timeSlots;
};

