import { RegistrarUsuario } from "../../application/RegistrarUsuario";
import { RegistrarUsuarioController } from "../controller/RegistrarUsuarioController";
import { UsuariosRepositorio } from "../mysql/UsuariosMysql";

const userRepo=new UsuariosRepositorio;
const registerUser=new RegistrarUsuario(userRepo);
export const controllerRegister=new RegistrarUsuarioController(registerUser);