import {UsuariosRepositorio} from '../mysql/UsuariosMysql';
import express from 'express';
const usuariosRepositorio = new UsuariosRepositorio();

export const getIdUsuarioController = async (req: express.Request, res: express.Response) => {
    try {
      const id = req.params.id;
      const usuario = await usuariosRepositorio.obtenerUsuarioPorId(id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el usuario' });
    }
  };