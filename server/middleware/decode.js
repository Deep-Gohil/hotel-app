const jwt = require("jsonwebtoken");

const decode = async (req, res, next) => {
  try {
    let token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "token is required" });
    }

    try {
      let data = await jwt.verify(token, "private-key");
      req.user = data;
      next(); 
    } catch (error) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  } catch (error) {
    res.status(500).json({ error});
  }
};

module.exports = { decode };
