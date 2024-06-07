import express from 'express';
import { Equipment } from '../models/Equipment.model.js';

const router = express.Router();

// GET all equipment
router.get('/', async (req, res) => {
  try {
    const equipment = await Equipment.find();
    res.json(equipment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new equipment
router.post('/post', async (req, res) => {
  const { name, id, available } = req.body;
  try {
    const equipment = await Equipment.create({ name, id, available });
    res.status(201).json(equipment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
