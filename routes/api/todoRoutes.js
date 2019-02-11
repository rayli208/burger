const router = require("express").Router();
const todosController = require("../../controllers/todoController");

// define API routes

// when user hits /api/todos
router
  .route("/")
  .get(todosController.findAll)
  .post(todosController.createTodo);


// when user hits /api/todos/:id
router
  .route("/:id")
  .get(todosController.findById)
  .put(todosController.updateTodo)
  .delete(todosController.deleteTodo);

module.exports = router;
