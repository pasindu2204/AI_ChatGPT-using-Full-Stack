import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import chatRouter from './routes/chatRoutes.js';

dotenv.config();

const app = express();



await connectDB();

// middlewares
app.use(cors());
app.use(express.json());

// route
app.get('/', (req, res) => res.send('server is running'));
app.use('/api/user', userRouter);
app.use('/api/chat', chatRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));