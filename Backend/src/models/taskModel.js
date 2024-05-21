const conn = require("./connection");

const getAll = async () => {
  const tasks = await conn.execute("SELECT * FROM tasks");
  return tasks;
};
module.exports = {
  getAll,
};
