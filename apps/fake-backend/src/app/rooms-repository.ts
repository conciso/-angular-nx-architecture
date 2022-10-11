const rooms = [
  {id: '1', roomSize: 28, bedSize: 2, extras: ['book', 'chair', 'table']},
  {id: '2', roomSize: 13, bedSize: 1, extras: ['book', 'chair', 'table']},
];

export const getAllRooms = () => rooms;
export const getRoom = (id: string) => rooms.find((room) => room.id === id);
