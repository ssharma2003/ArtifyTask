import express from 'express';
const router = express.Router();

import { Project } from '../models/Project.model.js';
router.get('/', async (req, res) => {
    try {
      const projects = await Project.find();
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // GET a specific project by ID
  router.get('/:id', async (req, res) => {
    try {
      const project = await Project.findById(req.params.id);
      if (project == null) {
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
    
  });

export default router;