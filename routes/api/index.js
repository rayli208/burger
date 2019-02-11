const router = require("express").Router();
const todoRoutes = require("./todoRoutes");

// set up routes and prefix them
router.use("/todos", todoRoutes);


module.exports = router;
