import { Usuario } from '../../domain/modelosUsuario';
import {UsuariosRepositorio} from '../mysql/UsuariosMysql';
import express from 'express';
const usuariosRepositorio = new UsuariosRepositorio();

export const crearUsuarioController = async (req: express.Request, res: express.Response) => {
    try {
      const nuevoUsuario: Usuario = req.body;
      const usuarioCreado = await usuariosRepositorio.crearUsuario(nuevoUsuario);
      res.json(usuarioCreado);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el usuario' });
    }
  };