import AppointmentCard from '@/components/appointment-card';
import { appointmentData } from '@/data/appointments';
import type { Appointment } from '@/types/calendar';

const UpcomingSchedule= () => {

  const appointmentsByDay = appointmentData.reduce((acc, appointment) => {
  
  const appointmentDate = new Date(appointment.dateTime);
  const day = appointmentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    
    if (!acc[day]) {
      acc[day] = [];
    }
    acc[day].push(appointment);
    return acc;
  }, {} as Record<string, Appointment[]>);

  return (
    <div className=" rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-medium text-gray-800 mb-4">The Upcoming Schedule</h3>
      
      <div className="space-y-6 flex flex-wrap  gap-4">
        {Object.entries(appointmentsByDay).map(([day, appointments]) => (
          <div key={day}>
            <h4 className="text-sm font-medium text-gray-600 mb-3">On {day}</h4>
            <div >
              {appointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.appointmentId}
                  title={appointment.reason}
                  time={new Date(appointment.dateTime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  icon={appointment.icon || '🩺'}
                  colorScheme={appointment.status === 'confirmed' ? 'indigo' : appointment.status === 'pending' ? 'orange' : 'red'}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
