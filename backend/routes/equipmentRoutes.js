import express from 'express';
import {Equipment} from '../models/Equipment.model.js';

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

// GET a specific equipment by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const equipment = await Equipment.findById(req.params.id);
//     if (!equipment) {
//       return res.status(404).json({ message: 'Equipment not found' });
//     }
//     res.json(equipment);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// POST a new equipment
router.post('/post', async (req, res) => {
  const { name, id, available } = req.body;
  const equipment = await Equipment.create({
    name,
    id,
    available
  });

 
});

export default router;
