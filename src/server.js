import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import { resolve } from 'path'
import './database';


const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(resolve(__dirname, '..', 'tmp', 'uploads')))

app.listen(process.env.PORT || 3333);