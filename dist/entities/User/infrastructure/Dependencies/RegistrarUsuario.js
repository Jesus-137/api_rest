"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerRegister = void 0;
const RegistrarUsuario_1 = require("../../application/RegistrarUsuario");
const RegistrarUsuarioController_1 = require("../controller/RegistrarUsuarioController");
const UsuariosMysql_1 = require("../mysql/UsuariosMysql");
const userRepo = new UsuariosMysql_1.UsuariosRepositorio;
const registerUser = new RegistrarUsuario_1.RegistrarUsuario(userRepo);
exports.controllerRegister = new RegistrarUsuarioController_1.RegistrarUsuarioController(registerUser);
