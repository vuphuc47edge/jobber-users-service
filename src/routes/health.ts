import { health } from '@users/controllers/health';
import express, { Router } from 'express';

const router: Router = express.Router();

export const healthRoutes = (): Router => {
  router.get('/users-health', health);
  return router;
};
