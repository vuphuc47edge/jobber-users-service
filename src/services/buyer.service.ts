import { BuyerModel } from '@users/models/buyer.schema';
import { IBuyerDocument } from '@vuphuc47edge/jobber-shared';

export const getBuyerByEmail = async (email: string): Promise<IBuyerDocument | null> => {
  const buyer: IBuyerDocument | null = (await BuyerModel.findOne({ email }).exec()) as IBuyerDocument;
  return buyer;
};

export const getBuyerByUsername = async (username: string): Promise<IBuyerDocument | null> => {
  const buyer: IBuyerDocument | null = (await BuyerModel.findOne({ username }).exec()) as IBuyerDocument;
  return buyer;
};

export const getRandomBuyers = async (count: number): Promise<IBuyerDocument[]> => {
  const buyers: IBuyerDocument[] = await BuyerModel.aggregate([{ $sample: { size: count } }]);
  return buyers;
};

export const createBuyer = async (buyerData: IBuyerDocument): Promise<void> => {
  const checkIfBuyerExist: IBuyerDocument | null = await getBuyerByEmail(`${buyerData.email}`);

  if (!checkIfBuyerExist) {
    await BuyerModel.create(buyerData);
  }
};

export const updateBuyerIsSellerProp = async (email: string): Promise<void> => {
  await BuyerModel.updateOne(
    { email },
    {
      $set: {
        isSeller: true
      }
    }
  ).exec();
};

export const updateBuyerPurchasedGigsProp = async (buyerId: string, purcharedGigsId: string, type: string): Promise<void> => {
  await BuyerModel.updateOne(
    { _id: buyerId },
    type === 'purchasedGigs'
      ? {
          $push: {
            purchasedGigs: purcharedGigsId
          }
        }
      : {
          $pull: {
            purchasedGigs: purcharedGigsId
          }
        }
  ).exec();
};
