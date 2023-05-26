import { Usuario } from '../../domain/modelosUsuario';
import { connect } from '../../../../database/conexion';
import { UserRepository } from '../../domain/UserRepository';

export class UsuariosRepositorio implements UserRepository{
  async obtenerUsuario(): Promise<Usuario | null> {
    try {
      const conn = await connect();
      const rows = new Array; 
      rows[0] = await conn.query('SELECT * FROM usuarios');
      return rows[0][0];
    } catch (error) {
      throw new Error;
    }
  }

  async obtenerUsuarioPorId(id: string): Promise<Usuario | null> {
    try {
      const conn = await connect();
      const rows = new Array;
      rows[0] = await conn.query('SELECT * FROM usuarios WHERE id = ?', [id]);
      if (rows.length > 0) {
        return new Usuario(rows[0][0][0].id,rows[0][0][0].nombre,rows[0][0][0].email);
      } else {
        return null;
      }
    } catch (error) {
      throw new Error;
    }
  }

  async crearUsuario(usuario: Usuario) {
    try {
      const conn = await connect();
      const result = await conn.query('INSERT INTO usuarios SET ?', [usuario]);
      const insertId = result[0];
      return { ...usuario, id: insertId.constructor.name.length };
    } catch (error) {
      throw new Error;
    }
  }

  async actualizarUsuario(id: number, usuario: Usuario): Promise<void> {
    try {
      const conn = await connect();
      await conn. query('UPDATE usuarios SET ? WHERE id = ?', [usuario, id]);
    } catch (error) {
      throw new Error;
    }
  }

  async eliminarUsuario(id: number): Promise<void> {
    try {
      const conn = await connect();
      await conn.query('DELETE FROM usuarios WHERE id = ?', [id]);
    } catch (error) {
      throw new Error;
    }
  }
}