import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// route
app.get('/', (req, res) => res.send('server is running'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));