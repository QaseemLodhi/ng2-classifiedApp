import * as express from 'express';

import * as userController from './api/user';

let router: express.Router = express.Router();

router.get('/user/:token', userController.getUser);

export default router;
