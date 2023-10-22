import express, { Application, Request, Response, NextFunction } from 'express';
import { Server } from './server';
import { PORT } from './config/port';

const app: Application = express();
const server: Server = new Server(app);

app.listen(PORT, () =>
    console.log(`Server is started and listening the port ${PORT}`)
).on('error', (err) => console.error(err));

/** Error handling */
app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message,
    });
});
