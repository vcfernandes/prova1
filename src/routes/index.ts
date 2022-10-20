import express from 'express';
import UserController from '../controllers/UserControllers';
const routes = express.Router();
const Lista = express.Router();
const BuscarSexo = express.Router();
const BuscarIdade = express.Router();
const BuscarId = express.Router();

routes.get('/list' /**  */);
routes.get('/usuario/listar');
routes.get('/usuario/:id');
routes.post('/usuario/idade');
routes.post('/usuario/sexo');

// continuar aqui
export default routes;
