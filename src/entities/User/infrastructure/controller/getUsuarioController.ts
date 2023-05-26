import {UsuariosRepositorio} from '../mysql/UsuariosMysql';
import express from 'express';
const usuariosRepositorio = new UsuariosRepositorio();

export const getUsuarioController = async (req: express.Request, res: express.Response) => {
    try {
      const usuarios = await usuariosRepositorio.obtenerUsuario();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
  };