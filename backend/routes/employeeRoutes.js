import express from 'express';
import {Employee} from '../models/Employee.model.js';

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

// GET a specific employee by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const employee = await Employee.findById(req.params.id);
//     if (!employee) {
//       return res.status(404).json({ message: 'Employee not found' });
//     }
//     res.json(employee);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// POST a new employee
router.post('/post', async (req, res) => {
  const {id, name, role} = req.body;
  const employee = await Employee.create({
    id,
    name,
    role
  });

});

export default router;
