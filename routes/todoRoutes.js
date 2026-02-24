const express = require("express");
const router = express.Router();
const { createTodo, getTodo, getSingleTodo } = require("../controllers/todoControllers");

router.post("/", createTodo);
router.get("/", getTodo);
router.get("/:id", getSingleTodo);
// router.put("/:id", handler);
// router.delete("/:id", handler );

module.exports = router;
