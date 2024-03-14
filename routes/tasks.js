const express = require('express')
const router = express.Router()
const {getAllTasks,createTask,deleteTask,getSingleTask,updateTask} = require('../controllers/tasks')


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').delete(deleteTask).get(getSingleTask).patch(updateTask)

module.exports = router
