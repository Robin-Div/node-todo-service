import todos from "../data/todo.js";

const getTodos = (req, res) => {
  return res.json(todos);
};

export { getTodos };
