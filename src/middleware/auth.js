const bcrypt = require("bcrypt");
const salt = parseInt(process.env.SALT);

const hashPass = async (req, res, next) => {
  try {
    // Step 1: Hash the password
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    // Step 2: Replace password on req.body with hashed password
    req.body.password = hashedPass;

    // Step 3: use next()
    next();
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = {
  hashPass: hashPass,
};
