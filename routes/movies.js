import express from 'express';
import {
    allMovies,
    findByName,
    getById,
    deleteMovie,
    addMovie,
    editMovie
} from '../helper.js';
import { auth } from '../middleware/auth.js';
const router = express.Router();

router
.route('/')
.get( allMovies)
.post( addMovie );

router
.route('/:id')
.delete(deleteMovie)
.put(editMovie)
.get(getById );


router
.get('/byname/:name', findByName);


export const moviesRouter = router