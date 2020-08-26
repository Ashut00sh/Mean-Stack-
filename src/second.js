const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);
let DB_CONFIG = {
  host: "127.0.0.1",
  user: "ashutosh",
  password: "2357",
  database: "pro",
};

// await Connection.connectAsync();
let readByQuery2 = async () => {
  const connection = mysql.createConnection(DB_CONFIG);

  //await connection.connectAsync();
  await connection.connectAsync();

  let sql = "SELECT * FROM customers where cnum=? and city=?";
  let result = await connection.queryAsync(sql, [2002, "rome"]);
  console.log(result);
  await connection.endAsync();
  return result;
};

readByQuery2();
