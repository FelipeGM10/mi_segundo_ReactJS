import {Router} from 'express';

import { createActor, deleteActor, getActor, getActores, getSerie, getSeries, updateActor } from '../controllers/netflix.controllers.js';

const router = Router();

router.get('/actores', getActores);

router.get('/actores/:id', getActor);

router.post('/actores', createActor);

router.delete('/actores/:id', deleteActor);

router.put('/actores/:id', updateActor);

router.get('/series', getSeries);

router.get('/series/:id', getSerie);


export default router;