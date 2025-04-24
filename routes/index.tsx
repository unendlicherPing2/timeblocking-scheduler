import Data from "../domain/data.ts";
import Task from "../domain/Task.ts";

export default function Home() {
  return (
    <ul>
      {Data.map((e: Task) => (
        <ul>
          <a href={`/task/${e.name}`}>{e.name}</a>
        </ul>
      ))}
    </ul>
  );
}
