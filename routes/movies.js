import express from 'express';
import {
    allMovies,
    findByName,
    getById,
    deleteMovie,
    addMovie,
    editMovie
} from '../helper.js';

const router = express.Router();

router.get('/', allMovies);

router.delete('/:id', deleteMovie);

router.put('/:id', editMovie);

router.post('/', addMovie );

router.get('/byname/:name', findByName);

router.get('/:id', getById );

export const moviesRouter = router