import { X, MapPin, User, Calendar, AlertCircle } from "lucide-react";
import { type Appointment } from "@/types/calendar";

interface CalendarDetailViewProps {
  date: Date;
  appointments: Appointment[];
  onClose: () => void;
}
export default function CalendarDetailView({
  date,
  appointments,
  onClose,
}: CalendarDetailViewProps) {
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formatTime = (dateTime: string) => {
    return new Date(dateTime).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getStatusColor = (status: string) => {
    return status === "confirmed"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden">
        <div className="p-6 border-b bg-gradient-to-r from-[#2D2851] to-[#393070]">
          <div className="flex justify-between items-start">
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-1">{formattedDate}</h2>
              <p className="text-indigo-200 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {appointments.length} Appointment
                {appointments.length !== 1 ? "s" : ""}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-auto max-h-[calc(85vh-5rem)] space-y-4">
          {appointments.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No appointments scheduled for this day</p>
            </div>
          ) : (
            appointments.map((appointment) => (
              <div
                key={appointment.appointmentId}
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-[#2D2851] mb-1">
                        {appointment.reason}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          appointment.status
                        )}`}
                      >
                        {appointment.status.charAt(0).toUpperCase() +
                          appointment.status.slice(1)}
                      </span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-[#2D2851]">
                        {formatTime(appointment.dateTime)}
                      </p>
                      <p className="text-xs text-gray-500">
                        Duration: {appointment.duration}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <User className="w-4 h-4 text-[#2D2851]" />
                      <span className="text-gray-700">
                        {appointment.doctor}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="w-4 h-4 text-[#2D2851]" />
                      <span className="text-gray-700">
                        {appointment.location}
                      </span>
                    </div>
                    {appointment.remarks && (
                      <div className="flex items-start gap-3 text-sm">
                        <AlertCircle className="w-4 h-4 text-[#2D2851] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          {appointment.remarks}
                        </span>
                      </div>
                    )}
                  </div>

                  {appointment.needsFollowUp && appointment.followUpDate && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-blue-600">
                        <Calendar className="w-4 h-4" />
                        <span>
                          Follow-up scheduled for{" "}
                          {new Date(
                            appointment.followUpDate
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
