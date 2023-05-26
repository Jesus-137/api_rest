import { SenderEmail } from "../application/senderEmail";
import { SenderEmailController } from "./controller/senderEmailComtroller";
import { UsuariosRepositorio } from "./mysql/UsuariosMysql";

export const userRepository= new  UsuariosRepositorio
export const senderEmail = new SenderEmail(userRepository);
export const senderEmailController = new SenderEmailController(senderEmail);