import { DatabasePostRepository } from "@repositories/implementations/DatabasePostRepository";
import { UpdatePostController } from "./UpdatePostController";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

const databasePostRepository = new DatabasePostRepository();

const updatePostUseCase = new UpdatePostUseCase(
    databasePostRepository
);

const updatePostController = new UpdatePostController(
    updatePostUseCase
);

export { updatePostUseCase, updatePostController };