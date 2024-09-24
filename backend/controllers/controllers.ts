// import { Router, Request, Response, NextFunction } from "express";
// import prisma from "../client";
// import jwt from "jsonwebtoken";

// export const mainController = () => {
//   const router = Router();

//   function authenticateToken(req: Request, res: Response, next: NextFunction) {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];

//     if (token == null) return res.sendStatus(401);

//     jwt.verify(
//       token,
//       process.env.TOKEN_SECRET as string,
//       (err: any, user: any) => {
//         console.log(err);

//         if (err) return res.sendStatus(403);

//         req.user = user;

//         next();
//       }
//     );
//   }

//   router.get("/", async (req, res) => {
//     res.json({ message: "Hello World" });
//   });

//   router.post("/sign-up", async (req, res) => {
//     const { email, password } = req.body;
//     const user = await prisma.Vendor.create({ data: { email, password } });
//     console.log(user);

//     console.log("secret", process.env.JWT_SECRET);

//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);

//     res.json({ token });
//   });

//   // router.post("/create-menu", async (req, res) => {
//   //   const { name } = req.body;
//   //   const menu = await prisma.menu.create({ data: { name } });
//   //   res.json({ menu });
//   // });

//   return router;
// };
