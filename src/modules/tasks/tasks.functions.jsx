import db from "../../config/db"



const create = async (tasks, action) => {

    tasks.status = 'pending'
    if (tasks.description === "") {
        tasks.description = "No hay desc..."
    }
    db.child("Tasks").push(tasks)
    action()
}

const delTask = async (id) => {

    db.child("Tasks/" + id).remove()
}

const updateTask = async (id, object) => {
    db.child("Tasks/" + id).update({ ...object })

}

export { create, delTask, updateTask }