
import type { StatusType } from '@/data/health-data';
import { cn } from '@/lib/utils';

export interface HealthStatusCardProps {
  title: string;
  icon: string;
  date: string;
  status: StatusType;
  className?: string;
}

export const HealthStatusCard= ({
  title,
  icon,
  date,
  status,
  className,
}:HealthStatusCardProps) => {
  const getStatusColor = (status: StatusType): string => {
    switch (status) {
      case 'critical':
        return 'bg-red-500';
      case 'warning':
        return 'bg-orange-500';
      case 'good':
        return 'bg-emerald-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div 
      className={cn("bg-white rounded-xl p-4 shadow-sm transition-all duration-300 hover:shadow-md ",className)}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-2xl">
          {icon}
        </div>
        <h3 className="text-gray-700 font-medium">{title}</h3>
      </div>
      
      <div className="mb-2.5">
        <p className="text-gray-400 text-sm">{date}</p>
      </div>
      
      <div className="bg-gray-100 h-2 rounded-full overflow-hidden">
        <div 
          className={`h-full ${getStatusColor(status)} transition-all duration-500 ease-in-out`}
          style={{ width: status === 'critical' ? '30%' : status === 'warning' ? '60%' : '90%' }}
          role="progressbar"
          aria-valuenow={status === 'critical' ? 30 : status === 'warning' ? 60 : 90}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};
