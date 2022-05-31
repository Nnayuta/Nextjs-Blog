import { DatabasePostRepository } from "../../../repositories/implementations/DatabasePostRepository";
import { CreatePostConstroller } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";

const databasePostRepository = new DatabasePostRepository();

const createNewPostUseCase = new CreatePostUseCase(
    databasePostRepository
);

const createPostConstroller = new CreatePostConstroller(
    createNewPostUseCase
);

export { createNewPostUseCase, createPostConstroller };