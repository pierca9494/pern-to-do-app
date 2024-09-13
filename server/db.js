const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "PierNico -8994",
  host: "localhost",
  port: "5432",
  database: "perntodo",
});

module.exports = pool;
