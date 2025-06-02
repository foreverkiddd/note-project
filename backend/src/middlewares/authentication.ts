import jwt from "jsonwebtoken";

export async function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const accessToken = req.cookies["access-token"];
  if (!accessToken) {
    return res.sendStatus(401);
  }

  jwt.verify();
  jwt.decode();

  req.user = user;
  next();
}
