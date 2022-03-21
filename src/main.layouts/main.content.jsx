import { Grid } from "@mui/material"
import TasksContainer from "../modules/tasks/tasks.container"
import { mainContentStyles } from "./styles"


export default function MainContent() {

    return (
        <Grid sx={{ ...mainContentStyles.mainGrid }}>
            <TasksContainer />
        </Grid>


    )

}