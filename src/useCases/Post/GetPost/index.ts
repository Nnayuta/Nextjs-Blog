import { DatabasePostRepository } from "@repositories/implementations/DatabasePostRepository";
import { GetPostController } from "./GetPostController";
import { GetPostUseCase } from "./GetPostUseCase";

const mongoPostRepository = new DatabasePostRepository();

const getPostUseCase = new GetPostUseCase(
    mongoPostRepository
);

const getPostController = new GetPostController(
    getPostUseCase
);

export { getPostUseCase, getPostController };
