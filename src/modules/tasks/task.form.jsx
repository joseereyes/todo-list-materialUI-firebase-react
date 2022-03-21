import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { tasksStyles } from "./styles"
import { create, updateTask } from "./tasks.functions"
import { format } from 'date-fns'

export default function FormTask({ taskTopUpdate,setTaskToUpdate, action, ...props }) {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm();

    const [taskDate, setTaskDate] = React.useState(new Date())
    setValue("date", format(taskDate, "dd-MMMM-yyyy").toString())


    React.useEffect(() => {
        taskTopUpdate && reset({ "date": taskTopUpdate.date, description: taskTopUpdate.description, title: taskTopUpdate.title })
    }, [reset, taskTopUpdate])

    return (
        <Box onSubmit={handleSubmit((data) => { taskTopUpdate ? updateTask(taskTopUpdate.id, data) : create(data,action); reset({ title: "", description: "" });setTaskToUpdate(null) })} component="form" sx={{ ...tasksStyles.createTask.boxForm }}>

            <TextField
                label="Titulo"
                id="outlined-start-adornment"
                sx={{ margin: "15px 0px 0px 0px" }}
                focused
                fullWidth
                placeholder="Conferencia."
                {...register("title", {
                    required: true,
                    maxLength: 25
                })}
            />
            {errors?.title?.type === "required" && <p style={{ ...tasksStyles.createTask.pErrors }}>El campo titulo es requerido</p>}
            {errors?.title?.type === "maxLength" && <p style={{ ...tasksStyles.createTask.pErrors }}>El titulo no puede tener mas de 22 caracteres</p>}

            <TextField
                id="outlined-multiline-static"
                label="Descripción"
                multiline
                sx={{ margin: "15px 0px 0px 0px" }}
                fullWidth
                rows={6}
                focused
                placeholder={`${taskTopUpdate ? (taskTopUpdate.description) : ("Conferencia el lunes con la empresa.")}`}
                {...register("description")}

            />

            <LocalizationProvider dateAdapter={AdapterDateFns}
            >
                <DesktopDatePicker
                    label="Fecha limite"
                    value={taskDate}
                    onChange={(pickedDate) => {
                        setTaskDate(pickedDate)
                    }}
                    renderInput={
                        (params) => {
                            return (
                                <TextField
                                    {...params}
                                    focused fullWidth
                                    sx={{ margin: "15px 0px 0px 0px" }}
                                    placeholde={new Date().toString()}

                                />
                            )
                        }
                    }
                />
            </LocalizationProvider>

            <Button
                type='submit'
                variant="contained"
                fullWidth
                sx={{ margin: "15px 0px 15px 0px" }}
            >
                Guardar
            </Button>
        </Box>

    );
}
