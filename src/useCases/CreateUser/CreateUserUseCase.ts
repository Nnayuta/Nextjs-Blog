import { User } from '../../entities/User';
import { IMailProvider } from '../../providers/IMailProvider';
import { IUsersRepository } from '../../repositories/IUserRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error('User already exists');
        }

        const user = new User(data);

        await this.usersRepository.save(user)

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Equipe do Meu App',
                email: 'equipe@localhost',
            },
            subject: 'Seja bem-vindo á plataforma',
            body: ` <h1>Bem vinda(o)</h1>
                    <p>Estamos felizes que você tenha se cadastrado no nosso site.</p>
                    <p>Você já pode começar a usar o sistema.</p>`,
        })
    }
}