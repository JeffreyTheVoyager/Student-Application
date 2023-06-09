const jwt = require("jsonwebtoken");

function generateAcessToken(name) {
  return jwt.sign({ name }, process.env.ACCESS_TOKEN, {
    expiresIn: "1d",
    algorithm: "HS256",
  });
}

const decodeAccessToken = (token) =>
  jwt.verify(token, process.env.ACCESS_TOKEN);

module.exports = { generateAcessToken, decodeAccessToken };
