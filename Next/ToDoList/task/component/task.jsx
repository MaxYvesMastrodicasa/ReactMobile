import { useEffect, useState } from "react";
import style from "@/styles/monCSS.module.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    const savedTask = localStorage.getItem("task");
    if (savedTask) {
      setTask(JSON.parse(savedTask));
    }
  }, []);

  // Sauvegarder les éléments dans le localStorage chaque fois qu'ils changent
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };
  const handleAddTask = () => {
    if (task.trim() !== "" && task.length <36) {
      setTasksList([...tasksList, task]);
      setTask("");
    }
  };
  const handleDeleteTask = (index) => {
    const newTasksList = [...tasksList];
    newTasksList.splice(index, 1);
    setTasksList(newTasksList);
  };
  return (
    <div className={style.main_counter}>
      <h1>To Do List</h1>
      <div className={style.button_set}>
        <input
          type="text"
          placeholder="Ajouter une tâche"
          value={task}
          onChange={handleTaskChange}
        />
        <button onClick={handleAddTask}>Ajouter</button>
      </div>
      <div className={style.listing}>
        <ul className={style.ul}>
          {tasksList.map((task, index) => (
            <li className={style.li} key={index}>
              {task}
              <div>
                <input className={style.inputLi} type="checkbox"></input>
                <button
                  className={style.supprBut}
                  onClick={() => handleDeleteTask(index)}
                >
                  <img
                    className={style.img}
                    src="/poubelle-de-recyclage.png"
                    alt="Bin"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoList;
