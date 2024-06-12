
# E-Commerce Recommendation System

This project implements a backend service that suggests products to a client based on their wishlist, search history, and browsing history. The service is built using Node.js and MongoDB, and it follows the MVC (Model-View-Controller) architecture.

## Features

- Analyze client's wishlist and search history to suggest products.
- Exclude products already in the wishlist from the suggestions.
- Return a maximum of 10 suggested products.
- Efficient and optimized for performance.

## Prerequisites

- Node.js (version 14 or later)
- MongoDB (version 4.0 or later)
- npm or yarn

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/e-com.git
   cd e-com
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   Or if you are using yarn:

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root of the project with the following content:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/ecom
   DB_NAME=ecom
   PORT=3000
   ```

   Adjust the values as needed.

4. **Import example data into MongoDB:**

   Start your MongoDB server and import the example data:

   ```bash
   mongoimport --db mydatabase --collection products --file path/to/products.json --jsonArray
   mongoimport --db mydatabase --collection wishlists --file path/to/wishlists.json --jsonArray
   mongoimport --db mydatabase --collection searchHistories --file path/to/searchHistories.json --jsonArray
   ```

5. **Start the server:**

   ```bash
   npm run dev
   ```

   Or if you are using yarn:

   ```bash
   yarn dev
   ```

   The server should now be running on `http://localhost:3000`.

## API Endpoints

### Get Recommendations

- **URL:** `/api/v1/recommendations/:userId`
- **Method:** `GET`
- **Description:** Fetches product recommendations for the specified user.
- **Parameters:**
  - `userId` (string): The ID of the user to get recommendations for.
- **Response:** JSON array of recommended products.

#### Example Request

```bash
curl http://localhost:3000/api/v1/recommendations/client1
```

#### Example Response

```json
[
  {
    "_id": "666831d0c1a1ad42e5d5d2eb",
    "productId": "p5",
    "name": "Book E",
    "category": "Books",
    "price": 19.99,
    "description": "Bestselling novel",
    "imageURL": "http://example.com/bookE.jpg",
    "stock": 200,
    "sales": 400
  },
  {
    "_id": "666831d0c1a1ad42e5d5d2ed",
    "productId": "p7",
    "name": "Children's Book G",
    "category": "Books",
    "price": 14.99,
    "description": "Illustrated children's story",
    "imageURL": "http://example.com/childrensbookG.jpg",
    "stock": 120,
    "sales": 250
  },
  {
    "_id": "666831d0c1a1ad42e5d5d2ec",
    "productId": "p6",
    "name": "Cookbook F",
    "category": "Books",
    "price": 29.99,
    "description": "Gourmet recipes for home chefs",
    "imageURL": "http://example.com/cookbookF.jpg",
    "stock": 100,
    "sales": 150
  },
  {
    "_id": "666831d0c1a1ad42e5d5d2ee",
    "productId": "p8",
    "name": "History Book H",
    "category": "Books",
    "price": 24.99,
    "description": "Detailed history of ancient civilizations",
    "imageURL": "http://example.com/historybookH.jpg",
    "stock": 70,
    "sales": 90
  }
  // ... up to 10 products
]
  

```

## Project Structure

```
e-com/
├── src/
│   ├── config/
│   │   └── database.ts        # MongoDB connection setup
│   ├── controllers/
│   │   └── recommendationController.ts  # Controller for recommendation logic
│   ├── models/
│   │   ├── productModel.ts    # Product model with MongoDB queries
│   │   └── userModel.ts       # User model with MongoDB queries
│   ├── routes/
│   │   └── recommendationRoutes.ts  # API routes
│   ├── services/
│   │   └── recommendationService.ts  # Service for recommendation logic
│   ├── app.ts                 # Express app setup
│   └── server.ts              # Server setup and startup
├── .env                       # Environment variables
├── package.json               # Project metadata and dependencies
└── README.md                  # Project documentation
```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## Contact

For any questions or support, please contact [firozahamed0@gmail.com](mailto:firozahamed0@gmail.com).


