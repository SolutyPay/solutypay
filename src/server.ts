import express, { NextFunction, Request, Response, response } from 'express'
import 'express-async-errors'
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
import { routes } from './routes/v1';

const app = express();

const allowedOrigins = ['*'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options)); 
app.use(express.json({limit:'1mb'}))
app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof Error){
    return response.status(400).json({
      message: err.message
    })
  }
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })
})

app.listen(process.env.PORT,()=> console.log('Server is running'));