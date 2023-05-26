import { UserRepository } from "../domain/UserRepository";

export class SenderEmail {
    constructor (private readonly userRepo: UserRepository){}

    async run(userId: string){
        const user = await this.userRepo.obtenerUsuarioPorId(userId);
        if (!user){
            throw new Error(`User id not found ${userId}`)
        }
        console.log('usuario', user.email);
    }
}