import { Request, Response } from 'express';
import { RegistrarUsuario } from '../../application/RegistrarUsuario';
import { Usuario } from '../../domain/modelosUsuario';

export class RegistrarUsuarioController{
  constructor(private readonly registrarUsuario: RegistrarUsuario){};
  registrar = async (req: Request, res: Response)=>{
    try {
      const {id, nombre, email}= req.body;
      const user = new Usuario (id, nombre, email);
      const tadosUser = await this.registrarUsuario.register(user)
      res.status(200).json(tadosUser);
    } catch (error) {
      res.status(500).json({error: 'error al registrar el usuario'});
    }
  }
}