import { Db } from 'mongodb';

class Product {
  private collection;

  constructor(db: Db) {
    this.collection = db.collection('products');
  }

  async getBestSellersByCategory(categories: string[], limit: number) {
    return this.collection.aggregate([
      { $match: { category: { $in: categories } } },
      { $sort: { sales: -1 } },
      { $limit: limit },
    ]).toArray();
  }
}

export default Product;
