const router = require("express").Router();
// import database connection
const db = require("../../config/connection");


// set up home page (root) route to load up handlebars template with todos list
router
  .route("/")
  .get(function(req, res) {
    db.query("SELECT * FROM todos", function(err, dbTodos) {
      if (err) {
        console.log(err);
        return res.status(500).json(err);
      }
      res.render("todos", {todoList: dbTodos});
    });
  });

module.exports = router;
