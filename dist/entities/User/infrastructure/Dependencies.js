"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.senderEmailController = exports.senderEmail = exports.userRepository = void 0;
const senderEmail_1 = require("../application/senderEmail");
const senderEmailComtroller_1 = require("./controller/senderEmailComtroller");
const UsuariosMysql_1 = require("./mysql/UsuariosMysql");
exports.userRepository = new UsuariosMysql_1.UsuariosRepositorio;
exports.senderEmail = new senderEmail_1.SenderEmail(exports.userRepository);
exports.senderEmailController = new senderEmailComtroller_1.SenderEmailController(exports.senderEmail);
