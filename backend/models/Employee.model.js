import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    id :{type: Number, required: true},
    name: {type: String, required: true},
    role: {type: String, required: true}
});

export const Employee = mongoose.model("Employee", employeeSchema);