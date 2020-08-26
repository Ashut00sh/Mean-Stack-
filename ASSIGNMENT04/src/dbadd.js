const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = {
  host: "127.0.0.1",
  user: "ashutosh",
  password: "2357",
  database: "pro",
};

let adddb = async () => {
  const connection = mysql.createConnection(db_config);
  await connection.connectAsync();
  //let sql = "select * from customers";
  // let result = await connection.queryAsync(sql);
  let sql = "insert into customers(cnum,cname,city)values(?,?,?)";
  let result = await connection.queryAsync(sql, [2009, "john", "italy"]);
  console.log(result);
  await connection.endAsync();
  return result;
};
adddb();
