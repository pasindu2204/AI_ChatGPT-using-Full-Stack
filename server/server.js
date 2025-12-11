import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './configs/db.js';
import userRouter from './routes/userRoutes.js';
import chatRouter from './routes/chatRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import creditRouter from './routes/creditRoutes.js';
import { stripeWebhooks } from './controllers/webHooks.js';



const app = express();


// load environment variables early
dotenv.config();

await connectDB();

// stripe webhook route
app.post('/api/stripe', express.raw({type: 'application/json'}), stripeWebhooks);

// middlewares
app.use(cors());
app.use(express.json());

// route
app.get('/', (req, res) => res.send('server is running'));
app.use('/api/user', userRouter);
app.use('/api/chat', chatRouter);
app.use('/api/message', messageRouter);
app.use('/api/credit', creditRouter);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));