import { Router } from "express";

import { createPostConstroller } from "@useCases/Post/CreatePost";
import { getPostsController } from "@useCases/Post/GetAllPosts";
import { getPostController } from "@useCases/Post/GetPost";
import { removePostController } from "@useCases/Post/RemovePost";
import { updatePostController } from "@useCases/Post/UpdatePost";

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

router.put('/posts/:id', (request, response) => {
    return updatePostController.handle(request, response)
});

router.delete('/posts/:id', (request, response) => {
    return removePostController.handle(request, response)
});

export { router as PostRouter };