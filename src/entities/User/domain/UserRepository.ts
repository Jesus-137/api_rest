import { Usuario } from "./modelosUsuario";

export interface UserRepository{
    obtenerUsuario():Promise<Usuario | null>;
    obtenerUsuarioPorId(id: string): Promise<Usuario | null>;
    crearUsuario(usuario: Usuario): Promise<Usuario | null>;
    actualizarUsuario(id: number, usuario: Usuario): Promise<void>;
    eliminarUsuario(id: number): Promise<void>; 
}