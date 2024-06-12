//services/recommendationService.ts
import { getBestSellersByCategory } from "../models/productModel";
import { getUserSearchHistory, getUserWishlist } from "../models/userModel";

export const getRecommendations = async (userId: string) => {
  const [wishlist, searchHistory] = await Promise.all([
    getUserWishlist(userId),
    getUserSearchHistory(userId)
  ]);

  const categories = searchHistory;
  const bestSellers = await getBestSellersByCategory(categories, wishlist, 10);

  return bestSellers.slice(0, 10);
};

  