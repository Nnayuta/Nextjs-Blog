import { User } from "../models/User";

const user = {
    uuid: "admin",
    name: 'Nayuta',
    email: 'nayuta@nizzy.com',
    password: 'admin',
    avatar: 'https://www.artmajeur.com/medias/standard/a/d/adamsdexter/artwork/10493311_anime-girl-edit-kawaii-manga-cap-favim-com-2608292.jpg',
} as User;

export async function findByEmailAndPassword(email: string, password: string): Promise<User> {
    return user;
}

export function recoveryUserByToken(token: string) {

    if(token){
        return user;
    }
}

