import express, { type Request, type Response } from 'express';
import loginRoute from './src/routes/auth-route';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Home route
app.get('/', (_req: Request, res: Response) => {
	res.send('Welcome Jeff to the Express Node.js app!');
});

app.use('/api/auth', loginRoute);

// Start the server

mongoose.set('strictQuery', false);
mongoose
	.connect('mongodb://localhost:27018/chat_online', {})
	.then(() => {
		console.log('Conectado a la base de datos');
		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	})
	.catch((err) => console.log(err));
