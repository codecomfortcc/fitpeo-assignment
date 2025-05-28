import { type Appointment } from '@/types/calendar';
import { formatTime } from '@/utils/date-utils';

interface AppointmentSlotProps {
  time: string;
  appointment: Appointment | undefined;
  isNextAppointment?: boolean;
  hasConsecutiveNext?: boolean;
  hasConsecutivePrev?: boolean;
}

const AppointmentSlot = ({
  time,
  appointment,
  isNextAppointment = false,
  hasConsecutiveNext = false,
  hasConsecutivePrev = false
}:AppointmentSlotProps) => {
  const getBgColorClass = () => {
    if (isNextAppointment) return 'bg-blue-100 border-blue-300';
    if (appointment) return 'bg-indigo-50 border-indigo-100';
    return 'bg-gray-50 hover:bg-gray-100';
  };

  const getBorderRadiusClass = () => {
    if (hasConsecutiveNext && hasConsecutivePrev) return 'rounded-none';
    if (hasConsecutiveNext) return 'rounded-tl-lg rounded-tr-lg';
    if (hasConsecutivePrev) return 'rounded-bl-lg rounded-br-lg';
    return 'rounded-lg';
  };

  return (
    <div 
      className={`
        py-2 px-3 text-center border
        ${getBgColorClass()}
        ${getBorderRadiusClass()}
        ${appointment ? 'font-medium' : 'font-normal border-transparent'}
        transition-all duration-200
      `}
    >
      <div className="text-sm">
        {appointment ? formatTime(new Date(appointment.dateTime)) : time}
      </div>
    </div>
  );
};

export default AppointmentSlot;
