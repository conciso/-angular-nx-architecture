const rooms = [
  {id: '1', name: 'erster Raum', roomSize: 28, bedSize: 2, extras: ['book', 'chair', 'table']},
  {id: '2', name: 'zweiter Raum', roomSize: 13, bedSize: 1, extras: ['book', 'chair', 'table']},
  {id: '3', name: 'dritter Raum', roomSize: 13, bedSize: 1, extras: ['book', 'chair', 'table']},
  {id: '4', name: 'vierter Raum', roomSize: 13, bedSize: 1, extras: ['book', 'chair', 'table']},
  {id: '5', name: 'fünfter Raum', roomSize: 13, bedSize: 1, extras: ['book', 'chair', 'table']},
  {id: '6', name: 'sechster Raum', roomSize: 13, bedSize: 1, extras: ['book', 'chair', 'table']},
];

export const TestData = {
  getAllRooms() {
    return rooms;
  },

  getRoom(id: string) {
    return rooms.find((room) => room.id === id);
  },
};
