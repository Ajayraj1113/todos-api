const express = require("express");
const router = express.Router();
const {
  createTodo,
  getTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");

router.post("/", createTodo);
router.get("/", getTodo);
router.get("/:id", getSingleTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
