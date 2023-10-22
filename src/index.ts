import express, { Application } from 'express';
import { Server } from './server';
import { PORT } from './config/port';

const app: Application = express();
const server: Server = new Server(app);

app.get('/test', (req, res) => {
    res.send({ status: 'oki doki' });
});

app.listen(PORT, () =>
    console.log(`Server is started and listening the port ${PORT}`)
).on('error', (err) => console.error(err));
