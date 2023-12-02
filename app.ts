import express from 'express'
const app = express();

import todosRoute from './routes/todo';

app.use(todosRoute);

app.listen(3000);
