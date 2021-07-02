const jwt = require("jsonwebtoken");

const token = jwt.sign({ test: true }, "secretkey");

console.log(token);

const decoded = jwt.verify(token, "secretkey");
console.log(decoded);
