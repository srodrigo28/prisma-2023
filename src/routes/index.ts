import { Router } from 'express'

import { CreateLoginController } from '../controllers/login/Create_LoginControllers';
import { DeleteLoginController } from '../controllers/login/Delete_LoginControllers';
import { FindLoginController } from '../controllers/login/Find_LoginControllers';
import { FindAllLoginController } from '../controllers/login/FindAllLoginController';

import { DeleteUserController, CreateUserController, FindUserController, FindAllUserController } from '../controllers/user/UserControllers';

const router = Router();


/* TODOS LOGIN */
const findLogin = new FindLoginController
const findAllLogin = new FindAllLoginController
const createLogin = new CreateLoginController
const deleteLogin = new DeleteLoginController

/* TODOS USUARIOS */
const findAllUser = new FindAllUserController
const findUser = new FindUserController
const createUser = new CreateUserController
const deleteUser = new DeleteUserController

router.get('/user', findAllUser.handle)
router.get('/user/:id', findUser.handle)
router.post('/user', createUser.handle)
router.delete('/user/:id', deleteUser.handle)

router.get('/login/:id', findLogin.handle)
router.get('/login', findAllLogin.handle)
router.post('/login', createLogin.handle)
router.delete('/login/:id', deleteLogin.handle)

export { router }