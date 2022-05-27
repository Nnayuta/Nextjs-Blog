import { Router } from "express";
import { createPostConstroller } from "../useCases/Post/CreatePost";
import { getPostsController } from "../useCases/Post/GetAllPosts";
import { getPostController } from "../useCases/Post/GetPost";

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