import express from 'express';
import { getHouses } from '../controllers/housesController.js';

const router = express.Router();

router.get('/', getHouses);

export default router;
