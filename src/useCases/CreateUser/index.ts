import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { DatabaseUsersRepository } from "../../repositories/implementations/DatabaseUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const mongoUsersRepository = new DatabaseUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    mongoUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }