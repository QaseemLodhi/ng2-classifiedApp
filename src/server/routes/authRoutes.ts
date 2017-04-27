import * as express from 'express';

import * as authController from './api/auth';

let router: express.Router = express.Router();

// router.route('/users/login').post(UserController.login);

router.post('/users/login', authController.login);
router.post('/users', authController.register);

// router.get('/', userController.index);
// router.get('/:id', userController.show);
// router.post('/', userController.create);
// router.put('/:id', userController.update);
// router.delete('/:id', userController.destroy);
export default router;
