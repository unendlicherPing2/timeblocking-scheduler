import Task from "./Task.ts";

const data: Task[] = [
  {
    name: "Test1",
    notes: "",
    time_estimate: 2,
    priority: 0,
    due_date: null,
  },
  {
    name: "Test2",
    notes: "test note",
    time_estimate: 24 * 3,
    priority: 9,
    due_date: new Date(Date.parse("2025-03-02")),
  },
];

export default data;
