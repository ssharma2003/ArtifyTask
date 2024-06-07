import express from 'express';
import { Employee } from '../models/Employee.model.js';

const router = express.Router();

// GET all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new employee
router.post('/post', async (req, res) => {
  const { id, name, role } = req.body;
  try {
    const employee = await Employee.create({ id, name, role });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
