import uuid from 'react-native-uuid'
export const todosData = [
  {
    id: uuid.v4(),
    text: 'Take out the trash',
    isCompleted: true,
    isToday: true,
    hour: '10:00'
  },
  {
    id: uuid.v4(),
    text: 'Meeting with the boss',
    isCompleted: false,
    isToday: false,
    hour: '11:00'
  },
  {
    id: uuid.v4(),
    text: 'Dentist appointment',
    isCompleted: true,
    isToday: true,
    hour: '12:00'
  },
  {
    id: uuid.v4(),
    text: 'Pick up kids from school',
    isCompleted: false,
    isToday: true,
    hour: '13:00'
  },
  {
    id: uuid.v4(),
    text: 'Wash the car',
    isCompleted: false,
    isToday: true,
    hour: '14:00'
  },
  {
    id: uuid.v4(),
    text: 'Buy new shoes',
    isCompleted: false,
    isToday: false,
    hour: '15:00'
  },
  {
    id: uuid.v4(),
    text: 'Buy new car',
    isCompleted: false,
    isToday: true,
    hour: '16:00'
  },
  {
    id: uuid.v4(),
    text: 'Buy new house',
    isCompleted: false,
    isToday: false,
    hour: '17:00'
  },
  {
    id: uuid.v4(),
    text: 'Buy new house',
    isCompleted: false,
    isToday: false,
    hour: '18:00'
  }
]
