import { seller as create } from '@users/controllers/seller/create';
import { id, random, username } from '@users/controllers/seller/get';
import { seed } from '@users/controllers/seller/seed';
import { seller as update } from '@users/controllers/seller/update';
import express, { Router } from 'express';

const router: Router = express.Router();

export const sellerRoutes = (): Router => {
  router.get('/id/:sellerId', id);
  router.get('/username/:username', username);
  router.get('/random/:size', random);
  router.post('/create', create);
  router.put('/:sellerId', update);
  router.put('/seed/:count', seed);

  return router;
};
