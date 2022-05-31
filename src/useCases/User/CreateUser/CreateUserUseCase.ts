import { User } from '../../../entities/User';
import { IMailProvider } from '../../../providers/IMailProvider';
import { IUsersRepository } from '../../../repositories/IUserRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ) { }

    async execute(data: ICreateUserRequestDTO) {

        try {
            if(!data){
                throw new Error('Data is required');
            }
    
            const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

            if(userAlreadyExists === null){
                throw new Error('Fail to get data');
            }
    
            if (userAlreadyExists) {
                throw new Error('Email address already used.');
            }
    
            const user = new User(data);
    
            await this.usersRepository.save(user)  
             
        } catch (error) {
            throw new Error(error.message);
        }

        //Mail provider
        // await this.mailProvider.sendMail({
        //     to: {
        //         name: data.name,
        //         email: data.email,
        //     },
        //     from: {
        //         name: 'Equipe do Nizzy',
        //         email: 'equipe@nizzy.vercel.com',
        //     },
        //     subject: 'Seja bem-vinda(o)!',
        //     body: ` <h1>Bem vinda(o)</h1>
        //             <p>Estamos felizes que você tenha se cadastrado no nosso Blog.</p>`,
        // })
    }
}