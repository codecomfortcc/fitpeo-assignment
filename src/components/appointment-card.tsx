import React from 'react';

interface AppointmentCardProps {
  title: string;
  time: string;
  icon: React.ReactNode | string;
  colorScheme: 'red' | 'orange' | 'purple' |'indigo';
}

const AppointmentCard = ({ title, time, icon, colorScheme }:AppointmentCardProps) => {
  const getBackgroundColor = () => {
    switch (colorScheme) {
      case 'red':
        return 'bg-red-50';
      case 'indigo':
        return 'bg-indigo-100';
      case 'orange':
          return 'bg-orange-50';
      case 'purple':
        return 'bg-purple-100';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className={`${getBackgroundColor()} rounded-lg p-4`}>
      <div className="flex  justify-between items-start gap-4" >
        <div>
          <h4 className="font-medium text-gray-800">{title}</h4>
          <p className="text-sm text-gray-600 mt-1">{time}</p>
        </div>
        <div >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
