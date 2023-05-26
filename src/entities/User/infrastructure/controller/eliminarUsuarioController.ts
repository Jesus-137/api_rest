import {UsuariosRepositorio} from '../mysql/UsuariosMysql';
import express from 'express';
const usuariosRepositorio = new UsuariosRepositorio();

export const eliminarUsuarioController = async (req: express.Request, res: express.Response) => {
    try {
      const id = parseInt(req.params.id);
      await usuariosRepositorio.eliminarUsuario(id);
      res.json({ message: 'Usuario eliminado' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
  };