import { UserRepository } from "../domain/UserRepository";
import { Usuario } from "../domain/modelosUsuario";

export class RegistrarUsuario{
    constructor(private readonly userRepo:UserRepository){}

    async register(user:Usuario){
        return this.userRepo.crearUsuario(user)
            .then((usuarioRegistrado)=>{
                console.log([usuarioRegistrado]);
                return usuarioRegistrado;
            }).catch((error)=>{
                console.log(error);
            })
    }
}