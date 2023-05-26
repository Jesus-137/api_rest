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
exports.getUsuarioController = void 0;
const UsuariosMysql_1 = require("../mysql/UsuariosMysql");
const usuariosRepositorio = new UsuariosMysql_1.UsuariosRepositorio();
const getUsuarioController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuariosRepositorio.obtenerUsuario();
        res.json(usuarios);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios' });
    }
});
exports.getUsuarioController = getUsuarioController;
