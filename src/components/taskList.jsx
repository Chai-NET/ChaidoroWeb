export default function TaskList() {
  const data = ["apple", "banana", "orange"];

  const tasks = data.map((task, index) => {
    return <li key={index}>{task}</li>;
  });
  return (
    <>
      <ul>{tasks}</ul>
    </>
  );
}
