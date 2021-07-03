const jwt = require("jsonwebtoken");
const { User } = require("../models");

// header  :  Authorization :
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const [tokenType, tokenValue] = authorization.split(" ");
  console.log(tokenValue);

  if (tokenType !== "Bearer") {
    res.status(401).send({ errorMessage: "Login please " });
    return;
  }

  try {
    const { userId } = jwt.verify(tokenValue, "this_is_my_secret");

    User.findByPk(userId).then((user) => {
      res.locals.user = user;
      next(); // middleweare must have
    });
  } catch (error) {
    res.status(401).send({ errorMessage: "Login please " });
    return;
  }
};
