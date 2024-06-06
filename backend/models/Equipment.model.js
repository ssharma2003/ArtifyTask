import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema({
    id :{type: Number, required: true},
    name: {type: String, required: true},
    available: {type: String, required: true}
});

export const Equipment = mongoose.model("Equipment", equipmentSchema);