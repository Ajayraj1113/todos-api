const Todo = require("../models/todo");

exports.createTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    // console.log(title);

    if (!title || !description) {
      return res.status(422).json({
        msg: "All fields are required!!",
      });
    }

    const todo = new Todo({
      title,
      description,
      completed,
    });

    await todo.save();

    return res.status(201).json({
      success: true,
      msg: "Todo created!!",
      todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something went wrong!!",
      error,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();

    return res.status(200).json({
      success: true,
      msg: "all todos fetched",
      todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something went wrong!!",
      error,
    });
  }
};

exports.getSingleTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    return res.status(200).json({
      success: true,
      msg: "todo fetched",
      todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "something went wrong!!",
      error,
    });
  }
};

// update todo
exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!todo) {
      return res.status(404).json({
        msg: "No todo found!!",
      });
    }

    res.status(200).json({
      msg: "todo upadated!!",
      todo,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};

// delete todo
exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({
        msg: "No todo found!!",
      });
    }

    return res.status(200).json({
      msg: "todo deleted!!",
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
    });
  }
};
