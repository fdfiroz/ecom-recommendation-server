// models/productModel.js

import { getDB } from "../config/database";


export const getBestSellersByCategory = async (categories: string[], wishlistProductIds: string[], limit: number) => {
  const db = getDB();

  if (!db) {
    throw new Error('Database connection is not available.');
  }

  return db.collection('products').find({
    category: { $in: categories },
    productId: { $nin: wishlistProductIds }
  }).sort({ sales: -1 }).limit(limit).toArray();
};
