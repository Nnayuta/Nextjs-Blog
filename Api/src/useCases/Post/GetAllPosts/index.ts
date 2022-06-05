import { DatabasePostRepository } from "../../../repositories/implementations/DatabasePostRepository";
import { GetPostsController } from "./GetPostsController";
import { GetPostsUseCase } from "./GetPostsUseCase";

const mongoPostRepository = new DatabasePostRepository();

const getPostsUseCase = new GetPostsUseCase(
    mongoPostRepository
);

const getPostsController = new GetPostsController(
    getPostsUseCase
);

export { getPostsUseCase, getPostsController };
