const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let crdb = async () => {
  let connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "ashutosh",
    password: "2357",
    database: "pro",
  });
  await connection.connectAsync();
  console.log("successfully connected");
  let sql = "select * from customers";
  let result = await connection.queryAsync(sql);
  connection.end();
  console.log(result);
  return result;
};

crdb();
