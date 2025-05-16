import { PORT } from './config.js';
import express from 'express';
import cors from 'cors';
import pgp from 'pg-promise';
import usersRoutes from './routes/netflix.routes.js';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use(usersRoutes);

// const pgp = require('pg-promise')(/* options */)
// const db = pgp('postgres://admin:mysecretpassword@host:5432/NetflixDB')

// db.one('SELECT $1 AS value', 123)
//   .then((data) => {
//     console.log('DATA:', data.value)
//   })
//   .catch((error) => {
//     console.log('ERROR:', error)
//   });

app.listen(PORT);
console.log('Escuchando desde el puerto: ', PORT);