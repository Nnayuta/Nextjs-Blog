import { DatabasePostRepository } from "@repositories/implementations/DatabasePostRepository";
import { RemovePostController } from "./RemovePostController";
import { RemovePostUseCase } from "./RemovePostUseCase";

const databasePostRepository = new DatabasePostRepository();

const removePostUseCase = new RemovePostUseCase(
    databasePostRepository
);

const removePostController = new RemovePostController(
    removePostUseCase
);

export { removePostUseCase, removePostController };