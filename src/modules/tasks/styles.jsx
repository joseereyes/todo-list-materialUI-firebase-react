

const tasksStyles = {

    cardHeader: {

        background: 'linear-gradient(180deg, rgba(60,65,45,1) 0%, rgba(19,64,50,0.6026785714285714) 100%)',
        height: 30,
        textAlign: "center",
        borderRadius: 2,
        marginBottom: 15

    },
    cardHeaderBackground: {
        finished: 'linear-gradient(180deg, rgba(60,65,45,1) 0%, rgba(19,64,50,0.6026785714285714) 100%)',
        progress: 'linear-gradient(180deg, rgba(199,251,63,1) 0%, rgba(87,85,85,1) 100%)',
        stopped: 'linear-gradient(352deg, rgba(251,63,63,1) 0%, rgba(87,85,85,1) 89%)',
        allTasks: 'linear-gradient(5deg, rgba(63,94,251,1) 0%, rgba(87,85,85,1) 89%)'
    },
    gridContainer: {
        minWidth: 1024,
    },
    gridOneCard: {
        minWidth: 250,

    },
    addTaskIcon: {

        fontSize: 40,
        marginBottom: 1,
        borderRadius: "100%",
        ":hover": {
            backgroundColor: "#eaf7ff",
            cursor: "pointer"

        }
    },

    gridAddTaskIcon: {
        textAlign: "center",
        width: "100%"
    },
    createTask: {
        boxForm: {
            display: 'flex',
            flexWrap: 'wrap',
            width: "100%"
        },
        pErrors: {
            margin: 0, color: "red", fontSize: 14, marginLeft: 10
        }

    }
}



export {

    tasksStyles

}