import { getRandomSellers, getSellerById, getSellerByUsername } from '@users/services/seller.service';
import { ISellerDocument } from '@vuphuc47edge/jobber-shared';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const id = async (req: Request, res: Response): Promise<void> => {
  const seller: ISellerDocument | null = await getSellerById(req.params.sellerId);

  res.status(StatusCodes.OK).json({ message: 'Seller profile', seller });
};

export const username = async (req: Request, res: Response): Promise<void> => {
  const seller: ISellerDocument | null = await getSellerByUsername(req.params.username);

  res.status(StatusCodes.OK).json({ message: 'Seller profile', seller });
};

export const random = async (req: Request, res: Response): Promise<void> => {
  const sellers: ISellerDocument[] = await getRandomSellers(parseInt(req.params.size));

  res.status(StatusCodes.OK).json({ message: 'Random seller profile', sellers });
};
