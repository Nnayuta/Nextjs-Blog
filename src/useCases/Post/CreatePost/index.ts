import { DatabasePostRepository } from "../../../repositories/implementations/DatabasePostRepository";
import { CreatePostConstroller } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";

const mongoPostRepository = new DatabasePostRepository();

const createNewPostUseCase = new CreatePostUseCase(
    mongoPostRepository
);

const createPostConstroller = new CreatePostConstroller(
    createNewPostUseCase
);

export { createNewPostUseCase, createPostConstroller };