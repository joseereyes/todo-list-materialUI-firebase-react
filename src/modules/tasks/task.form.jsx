import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { tasksStyles } from "./styles"
import { create } from "./tasks.functions"
import { format } from 'date-fns'

export default function FormTask({ action, ...props }) {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors }
    } = useForm();

    const [taskDate, setTaskDate] = React.useState(new Date())
    setValue("date", format(taskDate, "dd-MMMM-yyyy").toString())

    return (
        <Box onSubmit={handleSubmit((data) => { create(data,action); reset({ title: "", description: "" }) })} component="form" sx={{ ...tasksStyles.createTask.boxForm }}>

            <TextField
                label="Titulo"
                id="outlined-start-adornment"
                sx={{ margin: "15px 0px 0px 0px" }}
                focused
                fullWidth
                placeholder='Conferencia'
                {...register("title", {
                    required: true,
                    maxLength: 35,
                    pattern: /^[A-Za-z]+$/i
                })}
            />
            {errors?.title?.type === "required" && <p style={{ ...tasksStyles.createTask.pErrors }}>El campo titulo es requerido</p>}
            {errors?.title?.type === "maxLength" && <p style={{ ...tasksStyles.createTask.pErrors }}>El titulo no puede tener mas de 35 caracteres</p>}

            <TextField
                id="outlined-multiline-static"
                label="Descripción"
                multiline
                sx={{ margin: "15px 0px 0px 0px" }}
                fullWidth
                rows={6}
                focused
                placeholder='Conferencia el lunes con la empresa.'
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
