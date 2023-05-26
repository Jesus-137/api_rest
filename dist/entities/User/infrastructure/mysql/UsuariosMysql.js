"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosRepositorio = void 0;
const modelosUsuario_1 = require("../../domain/modelosUsuario");
const conexion_1 = require("../../../../database/conexion");
class UsuariosRepositorio {
    obtenerUsuario() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, conexion_1.connect)();
                const rows = new Array;
                rows[0] = yield conn.query('SELECT * FROM usuarios');
                return rows[0][0];
            }
            catch (error) {
                throw new Error;
            }
        });
    }
    obtenerUsuarioPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, conexion_1.connect)();
                const rows = new Array;
                rows[0] = yield conn.query('SELECT * FROM usuarios WHERE id = ?', [id]);
                if (rows.length > 0) {
                    return new modelosUsuario_1.Usuario(rows[0][0][0].id, rows[0][0][0].nombre, rows[0][0][0].email);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                throw new Error;
            }
        });
    }
    crearUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, conexion_1.connect)();
                const result = yield conn.query('INSERT INTO usuarios SET ?', [usuario]);
                const insertId = result[0];
                return Object.assign(Object.assign({}, usuario), { id: insertId.constructor.name.length });
            }
            catch (error) {
                throw new Error;
            }
        });
    }
    actualizarUsuario(id, usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, conexion_1.connect)();
                yield conn.query('UPDATE usuarios SET ? WHERE id = ?', [usuario, id]);
            }
            catch (error) {
                throw new Error;
            }
        });
    }
    eliminarUsuario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield (0, conexion_1.connect)();
                yield conn.query('DELETE FROM usuarios WHERE id = ?', [id]);
            }
            catch (error) {
                throw new Error;
            }
        });
    }
}
exports.UsuariosRepositorio = UsuariosRepositorio;
