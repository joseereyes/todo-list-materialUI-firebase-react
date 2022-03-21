

const tasksStyles = {

    cardHeader: {

        background: 'linear-gradient(180deg, rgba(60,65,45,1) 0%, rgba(19,64,50,0.6026785714285714) 100%)',
        height: 30,
        textAlign: "center",
        borderRadius: 2,
        marginBottom: 15

    },
    cardHeaderBackground: {
        finished: '#9254C8',
        progress: '#9254C8',
        stopped: '#9254C8',
        allTasks: '#9254C8'
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