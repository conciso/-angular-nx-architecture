/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import {getAllRooms, getRoom} from './app/rooms-repository';

const app = express();

app.get('/api', (req, res) => {
  res.send({message: 'Welcome to fake-backend!'});
});

app.get('/api/rooms', (req, res) => {
  res.send(getAllRooms());
});

app.get('/api/room/:id', (req, res) => {
  return res.send(getRoom(req.params.id));
});

const port = 8080;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
