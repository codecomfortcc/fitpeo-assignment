
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  currentDate: Date;
  onPrevWeek: () => void;
  onNextWeek: () => void;
}

const CalendarHeader = ({
  currentDate,
  onPrevWeek,
  onNextWeek
}:CalendarHeaderProps) => {
  const formattedMonth = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold text-[#2D2851]">{formattedMonth}</h2>
      <div className="flex gap-1">
        <button
          onClick={onPrevWeek}
          className="p-2 rounded-full hover:bg-indigo-50 transition-colors"
          aria-label="Previous week"
        >
          <ChevronLeft className="w-5 h-5 text-[#2D2851]" />
        </button>
        <button
          onClick={onNextWeek}
          className="p-2 rounded-full hover:bg-indigo-50 transition-colors"
          aria-label="Next week"
        >
          <ChevronRight className="w-5 h-5 text-[#2D2851]" />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
