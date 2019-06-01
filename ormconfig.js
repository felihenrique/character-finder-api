const path = require("path");

module.exports = {
  name: "default",
  type: "mongodb",
  host: "mongo",
  port: 27017,
  username: "root",
  password: "root",
  database: "admin",
  entities: [path.join(__dirname, "src/modules/**/*.model.ts")],
  logging: true
};
