import { PageProps } from "$fresh/server.ts";
import Data from "../../domain/data.ts";

export default function Task(props: PageProps) {
  const task = Data.find((e) => e.name == props.params.name);
  return (
    <div>
      <h1>Title: {task?.name}</h1>
      <p>Notes: {task?.notes}</p>
      <p>Estimate: {task?.time_estimate}h</p>
      <p>Priority: {task?.priority}</p>
      <p>Due: {task?.due_date?.toLocaleString()}</p>
    </div>
  );
}
