//server.ts
import app from './app';
import { connectDB } from './config/database';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    }).on('error', (err) => {
      // if (err && err.code as  === 'EADDRINUSE') {
      //   console.error(`Port ${PORT} is already in use. Please free up the port and try again.`);
      //   process.exit(1);
      // } else {
      //   console.error('Failed to start server', err);
      //   process.exit(1);
      // }
    });
  } catch (error) {
    console.error('Failed to start server', error);
    process.exit(1);
  }
};

startServer();


