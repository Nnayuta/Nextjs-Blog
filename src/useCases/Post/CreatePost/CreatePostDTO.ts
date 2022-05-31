import { User } from "../../../entities/User";

export interface ICreatePostDTO{
    title: string;
    content: string;
    author: string;
}