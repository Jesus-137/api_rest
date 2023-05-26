import express from 'express';
import {getUsuarioController} from "../controller/getUsuarioController";
import { getIdUsuarioController } from '../controller/getIdUsuarioController';
import { crearUsuarioController } from '../controller/crearUsuarioController';
import { actualizarUsuarioController } from '../controller/actualizarUsuarioController';
import { eliminarUsuarioController } from '../controller/eliminarUsuarioController';
import { senderEmailController } from '../Dependencies';

const router = express.Router();

router.get('/', getUsuarioController);
router.get('/:id', getIdUsuarioController);
router.post('/', crearUsuarioController);
router.put('/:id', actualizarUsuarioController);
router.delete('/:id', eliminarUsuarioController);
router.post('/:id/sender', senderEmailController.run.bind(senderEmailController))

export default router;
