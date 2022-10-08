import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editToDo, setEditToDo] = useState(null);

  console.log(tasks);

  function addTask(task) {
    const newToDo = {
      id: Math.floor(Math.random() * 10000),
      task: task,
    };

    setTasks([...tasks, newToDo]);
    setNewTask("");
  }

  function removeTask(id) {
    setTasks(tasks.filter((todo) => todo.id !== id));
  }

  // function handleEdit(id) {
  //   const findTask = task.find((task) => task.id === id);
  //   setEditToDo(findTask);
  // }

  return (
    <div>
      <Head>
        <title>Kanban | Modern Task Tracker</title>
        <meta name="description" content="Task Tracker Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="bg-[#20212c] h-screen text-white p-5">
        <section className="flex mx-10 relative">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add task..."
            className="pl-2 p-4 w-full text-sm text-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400"
          />
          <button
            onClick={() => addTask(newTask)}
            type="submit"
            className="px-5 text-2xl bg-[#635FC7] hover:bg-[#373573] absolute right-0 h-full"
          >
            +
          </button>
        </section>

        <ul>
          {tasks.map((task) => (
            <>
              {/* Swap for list component */}
              <li key={task.id}>
                {task.task}
                <button key={task.id} onClick={() => removeTask(task.id)}>
                  X
                </button>
                {/* <button onClick={() => handleEdit(task.id)}>Edit</button> */}
              </li>
            </>
          ))}
        </ul>
      </main>
    </div>
  );
}
