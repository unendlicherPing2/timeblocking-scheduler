interface Task {
  name: string;
  notes: string;
  time_estimate: number;
  priority: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  due_date: Date | null;
}

export default Task;
