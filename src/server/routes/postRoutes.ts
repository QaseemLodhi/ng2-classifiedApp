import * as express from 'express';

import * as postController from './api/posts';

let router: express.Router = express.Router();

router.get('/posts', postController.getPosts);
// router.get('/posts/:id', postController.show);
router.post('/posts', postController.addPost);
// router.put('/posts/:id', postController.update);
// router.delete('/posts/:id', postController.destroy);

export default router;
