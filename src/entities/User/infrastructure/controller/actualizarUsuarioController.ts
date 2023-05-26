import { Usuario } from '../../domain/modelosUsuario';
import {UsuariosRepositorio} from '../mysql/UsuariosMysql';
import express from 'express';
const usuariosRepositorio = new UsuariosRepositorio();

export const actualizarUsuarioController = async (req: express.Request, res: express.Response) => {
    try {
      const id = parseInt(req.params.id);
      const usuarioActualizado: Usuario = req.body;
      await usuariosRepositorio.actualizarUsuario(id, usuarioActualizado);
      res.json({ message: 'Usuario actualizado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
  };