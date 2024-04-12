import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const numRooms = [19, 20, 34];
  const res = [];

  for (let i = 0; i < 3; i += 1) {
    res.push(new ClassRoom(numRooms[i]));
  }

  return res;
}
