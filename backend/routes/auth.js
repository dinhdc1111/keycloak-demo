import jwt from "jsonwebtoken";

export default async (req, res, next) => {
  const bearerToken = req.headers["authorization"];
  const token = bearerToken && bearerToken.split(" ")[1];
  if (token === null) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.KEYCLOAK_PUBLIC_KEY}\n-----END PUBLIC KEY-----`;

  const decodedToken = jwt.verify(token, public_key, {
    algorithms: ["RS256"],
  });
  const { email } = decodedToken;
  req.user = email;
  next();
};
