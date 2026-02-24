const express = require("express");
const router = express.Router();
const { createTodo, getTodo, getSingleTodo, updateTodo } = require("../controllers/todoControllers");

router.post("/", createTodo);
router.get("/", getTodo);
router.get("/:id", getSingleTodo);
router.put("/:id", updateTodo);
// router.delete("/:id", handler );

module.exports = router;
