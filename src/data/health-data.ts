export type StatusType = 'critical' | 'warning' | 'good';

export interface HealthItem {
  id: number;
  title: string;
  icon: string;
  date: string;
  status: StatusType;
}

export const healthData: HealthItem[] = [
  {
    id: 1,
    title: 'Lungs',
    icon: '🫁',
    date: 'Date: 24 Oct 2021',
    status: 'critical',
  },
  {
    id: 2,
    title: 'Teeth',
    icon: '🦷',
    date: 'Date: 26 Oct 2021',
    status: 'good',
  },
  {
    id: 3,
    title: 'Bone',
    icon: '🦴',
    date: 'Date: 24 Oct 2021',
    status: 'warning',
  },
];
