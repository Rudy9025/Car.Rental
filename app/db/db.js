import { Sequelize } from "sequelize";

// const sequelize = new Sequelize("carrentalsystem", "root", "rudy", {
//   host: "localhost",
//   dialect: "mysql",
//   dialectModule: require("mysql2"),
//   timezone: "+05:30",
// });
 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER_DB, process.env.PASS_DB, {
  host: process.env.HOST,
  dialect: "mysql",
  dialectModule: require("mysql2"),
  timezone: "+05:30",
});
  

module.exports = sequelize;
