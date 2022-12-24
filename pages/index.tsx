import React from "react";
import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../layouts/Sidebar";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Editing State
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState({});

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

  function handleEdit(e) {
    setCurrentTask({ ...currentTask, task: e.target.value });
    console.log(currentTask);
  }

  return (
    <div>
      <Head>
        <title>Kanban | Modern Task Tracker</title>
        <meta name="description" content="Task Tracker Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <div className="md:min-w-[300px]">
          <Sidebar />
        </div>

        <div className="flex-grow">
          <Header />

          <section className="bg-[#20212c] h-[calc(100%-100px)] text-white p-5">
            <div className="flex mx-10 relative">
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
            </div>

            <ul>
              {tasks.map((task) => (
                <>
                  {/* Swap for list component */}
                  <li
                    key={task.id}
                    className="bg-[#2B2C37] p-5 font-semibold relative max-w-[250px] mx-6 my-4 cursor-pointer"
                  >
                    <div className="p-2">{task.task}</div>

                    <button
                      key={task.id}
                      onClick={() => removeTask(task.id)}
                      className="absolute top-1 right-3 cursor-pointer"
                    >
                      X
                    </button>

                    {/* <button onClick={() => handleEdit(task)}>Edit</button> */}
                  </li>
                </>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
