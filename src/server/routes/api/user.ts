import User from '../../models/user';
import { authenticate } from '../../config/authenticate';
import { createToken } from '../../config/verify';


export function getUser(req, res) {
    console.log('req.params', req.params);
    authenticate(req.params).then(verifiedUser => {
        User.findOne({ _id: verifiedUser['id'] }).exec((err, user) => {
            if (err) {
                return res.json({ success: false, data: null, error: err });
            }
            let currentUser = {
                id: user['_id'],
                username: user['username'],
                email: user['email'],
            }
            let token = createToken(currentUser);
            currentUser['token'] = token; 
            res.json({ success: true, data: currentUser, error: null });
        });
    });
}