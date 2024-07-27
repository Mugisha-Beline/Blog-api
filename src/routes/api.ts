import express, { Request, Response } from "express";
import blogRouter from "./blogRoutes";
import userRouter from "./userRoutes";

const apiRouter = express.Router();

// Welcome route for API base
apiRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome to my blog App API." });
});

// Use blog routes for /api/v1/blogs
apiRouter.use("/blogs", blogRouter);

// Use user routes for /api/v1/users
apiRouter.use("/users", userRouter);

export default apiRouter;
