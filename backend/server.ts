// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { exampleController } from './controllers/exampleController'; // Import your controller

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// // Use the example controller
// app.use('/example', exampleController()); // Example route

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

import express, { Router, Request, Response, NextFunction } from "express";
import cors from "cors";
import prisma from "./client";
import jwt from "jsonwebtoken";

export const mainController = () => {
  const router = Router();

  function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(
      token,
      process.env.TOKEN_SECRET as string,
      (err: any, user: any) => {
        console.log(err);

        if (err) return res.sendStatus(403);

        req.user = user;

        next();
      }
    );
  }

  router.get("/test", async (req, res) => {
    res.json({ message: "Hello World" });
  });

  router.post("/sign-up", async (req, res) => {
    const { email, password } = req.body;
    const user = await prisma.Vendor.create({ data: { email, password } });

    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET as string);

    res.json({ token });
  });

  router.post("/create-menu", authenticateToken, async (req, res) => {
    const { name, user } = req.body;
    const menu = await prisma.menu.create({
      data: { name, vendorId: user.id },
    });
    res.json({ menu });
  });

  return router;
};

const router = mainController();

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
