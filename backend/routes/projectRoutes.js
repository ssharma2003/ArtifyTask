import express from 'express';
import { Project } from '../models/Project.model.js';

const router = express.Router();

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()
      .populate('assignedEmployees', 'name role')
      .populate('assignedEquipment', 'name available');
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a specific project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('assignedEmployees', 'name role')
      .populate('assignedEquipment', 'name available');
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new project
router.post('/post', async (req, res) => {
  const { id, name, status, description, startDate, endDate, assignedEmployees, assignedEquipment } = req.body;
  try {
    const project = await Project.create({
      id,
      name,
      status,
      description,
      startDate,
      endDate,
      assignedEmployees,
      assignedEquipment
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
