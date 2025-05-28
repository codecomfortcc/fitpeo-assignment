export interface Appointment {
  appointmentId: string;
  dateTime: string;
  patientName: string;
  doctor: string;
  department: string;
  reason: string;
  status: 'confirmed' | 'pending';
  location: string;
  duration: string;
  remarks?: string;
  needsFollowUp?: boolean;
  followUpDate?: string;
  processedDate?: Date;
  icon?: string; 
}

export interface WeekDay {
  dayName: string;
  dayNumber: number;
  date: Date;
  appointments: Appointment[];
  timeSlots: TimeSlot[];
}

export interface TimeSlot {
  time: string;
  appointment?: Appointment;
  isNextAppointment: boolean;
}
