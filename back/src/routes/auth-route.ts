import express from 'express';

const authRouter = express.Router();

authRouter.post('/register', (req, res) => {
	const { username, password } = req.body;

	// Here you would typically save the user to a database
	res.status(201).json({ message: 'User registered successfully!' });
});

authRouter.post('/login', (req, res) => {
	const { username, password } = req.body;

	// Here you would typically check the credentials against a database
	if (username === 'admin' && password === 'password') {
		res.status(200).json({ message: 'Login successful!' });
	} else {
		res.status(401).json({ message: 'Invalid credentials' });
	}
});

export default authRouter;
