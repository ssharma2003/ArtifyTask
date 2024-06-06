export const projects = [
  {
    id: 1,
    name: "Project A",
    status: "Ongoing",
    description: "Details about Project A",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    assignedEmployees: [{ id: 1, name: "Alice" }],
    assignedEquipment: [{ id: 1, name: "Excavator" }],
  },
  {
    id: 2,
    name: "Project B",
    status: "Pending",
    description: "Details about Project B",
    startDate: "2024-02-01",
    endDate: "2024-11-30",
    assignedEmployees: [{ id: 2, name: "Bob" }],
    assignedEquipment: [{ id: 2, name: "Crane" }],
  },
  {
    id: 3,
    name: "Project C",
    status: "Completed",
    description: "Details about Project C",
    startDate: "2024-03-01",
    endDate: "2024-10-31",
    assignedEmployees: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ],
    assignedEquipment: [
      { id: 1, name: "Excavator" },
      { id: 2, name: "Crane" },
    ],
  },
  
];

export const employees = [
  { id: 1, name: "Alice", role: "Engineer" },
  { id: 2, name: "Bob", role: "Foreman" },
];

export const equipment = [
  { id: 1, name: "Excavator", available: true },
  { id: 2, name: "Crane", available: false },
];
