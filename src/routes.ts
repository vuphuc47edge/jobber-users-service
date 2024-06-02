import { buyerRoutes } from '@users/routes/buyer';
import { healthRoutes } from '@users/routes/health';
import { sellerRoutes } from '@users/routes/seller';
import { verifyGatewayRequest } from '@vuphuc47edge/jobber-shared';
import { Application } from 'express';

const BUYER_BASE_PATH = '/api/v1/buyer';
const SELLER_BASE_PATH = '/api/v1/seller';

export const appRoutes = (app: Application): void => {
  app.use('', healthRoutes());
  app.use(BUYER_BASE_PATH, verifyGatewayRequest, buyerRoutes());
  app.use(SELLER_BASE_PATH, verifyGatewayRequest, sellerRoutes());
};
