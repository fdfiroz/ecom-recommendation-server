//models/userModel.ts

import { getDB } from "../config/database";

// Example schema for wishlists
// {
//   clientId: String,
//   products: [String]
// }
export const getUserWishlist = async (clientId: string) => {
  const db = getDB();

  if (!db) {
    throw new Error('Database connection is not available.');
  }
  const wishlist = await db.collection('wishlists').findOne({ clientId });
  return wishlist ? wishlist.products : [];
};
// Example schema for search history
// {
//   clientId: String,
//   categories: [String]
// }
export const getUserSearchHistory = async (clientId: string) => {
  const db = getDB();

  if (!db) {
    throw new Error('Database connection is not available.');
  }
  const searchHistory = await db.collection('searchHistories').findOne({ clientId });
  return searchHistory ? searchHistory.categories : [];
};


