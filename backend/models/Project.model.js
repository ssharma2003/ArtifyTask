import mongoose from "mongoose";

const projectschema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    status: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    assignedEmployees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
    assignedEquipment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Equipment' }]
})

export const Project = mongoose.model('Project', projectschema)