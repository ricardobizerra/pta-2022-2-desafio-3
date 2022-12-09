import express from 'express';
import UserController from '@controllers/UserController';
import PostController from '@controllers/PostController';

const routes = express.Router();
const userController = new UserController();
const postController = new PostController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/post', postController.create);

export default routes;