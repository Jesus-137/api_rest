"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.senderEmailController = void 0;
const senderEmail_1 = require("../../application/senderEmail");
const senderEmailComtroller_1 = require("../controller/senderEmailComtroller");
const UsuariosMysql_1 = require("../mysql/UsuariosMysql");
const userRepository = new UsuariosMysql_1.UsuariosRepositorio;
const senderEmail = new senderEmail_1.SenderEmail(userRepository);
exports.senderEmailController = new senderEmailComtroller_1.SenderEmailController(senderEmail);
