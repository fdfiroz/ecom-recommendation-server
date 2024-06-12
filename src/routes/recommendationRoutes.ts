// routes/recommendationRoutes.js
import { Router } from 'express';
import { recommendProducts } from '../controllers/recommendationController';

const router = Router();

router.get('/recommendations/:userId', recommendProducts);

export default router;
