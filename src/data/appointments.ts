import type { Appointment} from "@/types/calendar";

export const appointmentData: Appointment[] = [
  {
    appointmentId: "A101",
    dateTime: "2025-05-26T09:00:00",
    patientName: "Ravi Kumar",
    doctor: "Dr. Anita Sharma",
    department: "Cardiology",
    reason: "Routine Heart Check-up",
    status: "confirmed",
    location: "Apollo Hospital, Room 201",
    duration: "30 mins",
    remarks: "Carry previous ECG reports.",
    needsFollowUp: true,
    followUpDate: "2025-06-02T09:00:00",
    icon: "❤️"
  },
  {
    appointmentId: "A102",
    dateTime: "2025-05-27T11:30:00",
    patientName: "Anita Devi",
    doctor: "Dr. Leena Rao",
    department: "Gynecology",
    reason: "Consultation for PCOS",
    status: "confirmed",
    location: "Apollo Hospital, Room 207",
    duration: "25 mins",
    remarks: "Bring ultrasound and 3-day diet log.",
    icon: "👩‍⚕️"
  },
  {
    appointmentId: "A103",
    dateTime: "2025-05-28T10:00:00",
    patientName: "Mohammed Rafiq",
    doctor: "Dr. Sunil Verma",
    department: "Orthopedics",
    reason: "Leg Injury Follow-up",
    status: "pending",
    location: "Apollo Hospital, Room 301",
    duration: "20 mins",
    remarks: "Bring X-ray taken on 27th.",
    icon: "🦴"
  },
  {
    appointmentId: "A104",
    dateTime: "2025-05-30T12:00:00",
    patientName: "Sarah Johnson",
    doctor: "Dr. Smith",
    department: "General",
    reason: "Check-up",
    status: "confirmed",
    location: "Hospital",
    duration: "30 mins",
    icon: "🏥"
  },
  {
    appointmentId: "A105",
    dateTime: "2025-05-31T12:00:00",
    patientName: "John Doe",
    doctor: "Dr. Smith",
    department: "General",
    reason: "Check-up",
    status: "confirmed",
    location: "Hospital",
    duration: "30 mins",
    icon: "🏥"
  }
];



