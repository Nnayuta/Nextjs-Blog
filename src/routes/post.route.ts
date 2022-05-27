import { Router } from "express";
import { createPostConstroller } from "../useCases/CreatePost";
import { getPostsController } from "../useCases/GetAllPosts";
import { getPostController } from "../useCases/GetPost";

const router = Router();

router.post('/posts', (request, response) => {
    return createPostConstroller.handle(request, response)
});

router.get('/posts', (request, response) => {
    return getPostsController.handle(request, response)
});

router.get('/posts/:id', (request, response) => {
    return getPostController.handle(request, response)
});

export { router as PostRouter };