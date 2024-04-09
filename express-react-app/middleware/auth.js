import jwt from "jsonwebtoken";
const JWT_SECRET = "test";

function auth(req, res, next) {
  const token = req.cookies.token;

  try {
    const verifyResult = jwt.verify(token, JWT_SECRET);

    req.user = {
      email: verifyResult.email,
    };

    next();
  } catch (e) {
    res.status(401).json({ message: "Требуется аторизация" });
  }
}

export { auth };
