const express = require('express')
const todoitemsRouter = express.Router()
const todoitemsController = require('../controller/todoitemsController')

todoitemsRouter.get('/',todoitemsController.getitems)
todoitemsRouter.post('/',todoitemsController.createitem)
todoitemsRouter.put('/:id/completed',todoitemsController.markcompleted)
todoitemsRouter.delete('/:id',todoitemsController.deleteitem)



module.exports = todoitemsRouter