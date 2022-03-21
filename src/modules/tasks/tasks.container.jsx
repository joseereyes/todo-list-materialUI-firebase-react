import { useState } from "react";
import TaskCard from "./tasks.card"
import CardHeader from '@mui/material/CardHeader';
import { CardMedia } from "@mui/material";
import { Card } from "@mui/material";
import { Grid } from "@mui/material"
import { tasksStyles } from "./styles";
import AddIcon from '@mui/icons-material/Add';
import { useTaskContext } from "./tasks.context";
import FormTask from "./task.form";

export default function TasksContainer() {

    const { tasksList } = useTaskContext()

    const pendingTasks = tasksList.filter((task) => task.status === "pending")
    const processingTasks = tasksList.filter((task) => task.status === "processing")
    const finishedTasks = tasksList.filter((task) => task.status === "finished")

    const [showForm, setShowForm] = useState(false)
    const handleForm = () => {
        showForm ? setShowForm(false) : setShowForm(true)
    }

    return (
        <Grid container spacing={2} style={{ ...tasksStyles.gridContainer }}>

            <Grid item xs={3} sm={3} md={3} lg={3} sx={{ ...tasksStyles.gridOneCard }}>
                <Card sx={{ marginBottom: 3, }}>
                    <CardHeader
                        style={{ ...tasksStyles.cardHeader, background: tasksStyles.cardHeaderBackground.allTasks }}
                        title="Listado de tareas"
                    >
                    </CardHeader>
                    <CardMedia
                        component="img"
                        height="194"
                        image="https://www.computerhope.com/jargon/t/task.png"
                        alt="Paella dish"
                    />
                </Card>

                <Grid sx={{ ...tasksStyles.gridAddTaskIcon }}>

                    <AddIcon
                        color="primary"
                        sx={{ ...tasksStyles.addTaskIcon }}
                        onClick={handleForm}
                    />

                </Grid>

                {showForm &&
                    <Grid sx={{ ...tasksStyles.gridAddTaskIcon }}>
                        <FormTask/>
                    </Grid>}
            </Grid>

            <Grid item xs={3} sm={3} md={3} lg={3} sx={{ ...tasksStyles.gridOneCard }}>

                <CardHeader
                    style={{ ...tasksStyles.cardHeader, background: tasksStyles.cardHeaderBackground.stopped }}
                    title="Tareas pendientes"
                >
                </CardHeader>

                {pendingTasks && pendingTasks.map((item, i) => {
                    return <TaskCard key={i} card={item} />
                })}

            </Grid>

            <Grid item xs={3} sm={3} md={3} lg={3} sx={{ ...tasksStyles.gridOneCard }}>

                <CardHeader
                    style={{ ...tasksStyles.cardHeader, background: tasksStyles.cardHeaderBackground.progress }}
                    title="Tareas en processo"
                >
                </CardHeader>
                {processingTasks && processingTasks.map((item, i) => {
                    return <TaskCard key={i} card={item} />
                })}

            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} sx={{ ...tasksStyles.gridOneCard }}>

                <CardHeader
                    style={{ ...tasksStyles.cardHeader, background: tasksStyles.cardHeaderBackground.finished }}
                    title="Tareas Finalizadas"
                >
                </CardHeader>

                {finishedTasks && finishedTasks.map((item, i) => {
                    return <TaskCard key={i} card={item} />
                })}

            </Grid>
        </Grid>
    )

}