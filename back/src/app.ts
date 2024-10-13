import express from 'express';
import cors from 'cors';
import indexRoute from './routes/indexRoute';

const app = express();

app.use(cors());
app.use('/', indexRoute);

export default app;
