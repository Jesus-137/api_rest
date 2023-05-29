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
exports.RegistrarUsuarioController = void 0;
const modelosUsuario_1 = require("../../domain/modelosUsuario");
class RegistrarUsuarioController {
    constructor(registrarUsuario) {
        this.registrarUsuario = registrarUsuario;
        this.registrar = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, nombre, email } = req.body;
                const user = new modelosUsuario_1.Usuario(id, nombre, email);
                const tadosUser = yield this.registrarUsuario.register(user);
                res.status(200).json(tadosUser);
            }
            catch (error) {
                res.status(500).json({ error: 'error al registrar el usuario' });
            }
        });
    }
    ;
}
exports.RegistrarUsuarioController = RegistrarUsuarioController;
