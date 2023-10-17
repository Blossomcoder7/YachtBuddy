const jwtSecret = "qwertyuioasdfghjklzxcvbnmklkjsf";
const jwt = require("jsonwebtoken");

module.exports.verifyToken = function (req, res, next) {
  let { authorization } = req.headers; // Change to lowercase "authorization"
  console.log("Authorization Header:", authorization); // Log the header to ensure it's correct

  if (!authorization) return res.status(400).send({ message: "No token provided." });

  // Remove "Bearer " prefix
  if (authorization.startsWith("Bearer ")) {
    authorization = authorization.slice(7); // Remove the first 7 characters ("Bearer ")
  }

  jwt.verify(authorization, jwtSecret, function (err, decoded) {
    if (err || !decoded) {
      return res.status(401).send({
        message: "User session expired or token is invalid. Please login again!",
      });
    } else {
      console.log("Decoded Token:", decoded); // Log the decoded token to inspect its structure

      if (!decoded.user || !decoded.user.email) {
        return res.status(401).send({
          message: "Token does not contain user information or email.",
        });
      }

      console.log("Decoded Email:", decoded.user.email); // Log the email from the decoded token

      req.email = decoded.user.email;
      req.name = decoded.user.name;
      req.id = decoded.user.id;

      // Check token expiration
      const expirationTime = new Date(decoded.exp * 1000); // Convert seconds to milliseconds
      const currentTime = new Date();

      if (currentTime > expirationTime) {
        return res.status(401).send({ message: "Token has expired" });
      }

      next();
    }
  });
};
