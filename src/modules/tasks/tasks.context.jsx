import { useContext, useEffect, useState, createContext } from "react";
import db from "../../config/db.js"

const TaskContext = createContext();

const useTaskContext = () => {
    return useContext(TaskContext)
}

const TaskContextProvider = ({ children }) => {

    const [tasksList, setTasks] = useState([])



    useEffect(() => {

        const fetchData = async () => {

            db.child('Tasks').orderByKey().on('value', data => {
                let newTaskList = []
                data.forEach((item) => {

                    let data = item.val()
                    data.id = item.key
                    newTaskList.push(data)
                })
                setTasks(newTaskList)
            })
 
        };
        fetchData();


    }, [])

    return (
        <TaskContext.Provider value={{ tasksList }}>
            {children}
        </TaskContext.Provider>
    )
}
export { TaskContextProvider, useTaskContext }