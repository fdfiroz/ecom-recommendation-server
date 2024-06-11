import morgan, { StreamOptions } from 'morgan';
import { Request, Response, NextFunction } from 'express';

// Custom stream object with write method
const stream: StreamOptions = {
  write: (message) => console.log(message.trim()),
};

// Custom token to log request body
morgan.token('body', (req: Request) => JSON.stringify(req.body));

// Logger format including custom token
const loggerFormat = ':method :url :status :res[content-length] - :response-time ms - :body';

// Create the logger middleware
const loggerMiddleware = morgan(loggerFormat, { stream });

const logger = (req: Request, res: Response, next: NextFunction) => {
  loggerMiddleware(req, res, next);
};

export default logger;
