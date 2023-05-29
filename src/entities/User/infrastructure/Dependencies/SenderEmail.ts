import { SenderEmail } from "../../application/senderEmail";
import { SenderEmailController } from "../controller/senderEmailComtroller";
import { UsuariosRepositorio } from "../mysql/UsuariosMysql";

const userRepository= new  UsuariosRepositorio
const senderEmail = new SenderEmail(userRepository);
export const senderEmailController = new SenderEmailController(senderEmail);