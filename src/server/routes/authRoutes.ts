import * as express from 'express';

import * as authController from './api/auth';

let router: express.Router = express.Router();

router.post('/login', authController.login);
router.post('/register', authController.register);

export default router;
