const rooms = [
  {
    id: '1',
    name: 'erster Raum',
    image: 'http://localhost:3030/static/bioshock01.jpg',
    roomSize: 28,
    bedSize: 2,
    extras: ['book', 'chair', 'table'],
  },
  {
    id: '2',
    name: 'zweiter Raum',
    image: 'http://localhost:3030/static/cyberpunk01.jpg',
    roomSize: 13,
    bedSize: 1,
    extras: ['book', 'chair', 'table'],
  },
  {
    id: '3',
    name: 'dritter Raum',
    image: 'http://localhost:3030/static/cyberpunk02.jpg',
    roomSize: 13,
    bedSize: 1,
    extras: ['book', 'chair', 'table'],
  },
  {
    id: '4',
    name: 'vierter Raum',
    image: 'http://localhost:3030/static/halflife01.jpg',
    roomSize: 13,
    bedSize: 1,
    extras: ['book', 'chair', 'table'],
  },
  {
    id: '5',
    name: 'fünfter Raum',
    image: 'http://localhost:3030/static/slimeRancher01.jpg',
    roomSize: 13,
    bedSize: 1,
    extras: ['book', 'chair', 'table'],
  },
  {
    id: '6',
    name: 'sechster Raum',
    image: 'http://localhost:3030/static/subnautica01.jpeg',
    roomSize: 13,
    bedSize: 1,
    extras: ['book', 'chair', 'table'],
  },
];

export const TestData = {
  getAllRooms() {
    return rooms;
  },

  getRoom(id: string) {
    return rooms.find((room) => room.id === id);
  },
};
