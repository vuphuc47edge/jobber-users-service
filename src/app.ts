import { config } from '@users/config';
import { databaseConnection } from '@users/database';
import { start } from '@users/server';
import express, { Express } from 'express';

const initialize = (): void => {
  databaseConnection();
  config.cloudinaryConfig();
  const app: Express = express();
  start(app);
};

initialize();
