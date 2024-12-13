import express from 'express';
import vinylService from '../services/vinylService';

const router = express.Router();

router.get('/', (_req, res) => {
	res.send(vinylService.getVinyls());
})

router.post('/', (req, res) => {
	const { dateAdded, condition, comments, price, stock, albumInfo } = req.body;
	const addedEntry = vinylService.addVinyl(
		dateAdded,
		condition,
		comments,
		price,
		stock,
		albumInfo
	);
	res.json(addedEntry);
})

export default router;