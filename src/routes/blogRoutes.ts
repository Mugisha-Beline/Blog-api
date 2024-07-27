import express from "express";
import {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController";
import { verifyUserToken } from "../middlewares/verifyUserToken";
import {
  createBlogDataValidator,
  updateBlogDataValidator,
} from "../validators/blog.validator";

const blogRouter = express.Router();

// Define routes
blogRouter.get("/", getAllBlogs);
blogRouter.post("/", verifyUserToken, createBlogDataValidator, createBlog);
blogRouter.get("/:id", getBlogById);
blogRouter.put("/:id", verifyUserToken, updateBlogDataValidator, updateBlog);
blogRouter.delete("/:id", verifyUserToken, deleteBlog);

export default blogRouter;
