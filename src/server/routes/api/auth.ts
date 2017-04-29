import User from '../../models/user';
import * as crypto from 'crypto';
import config from '../../config/config';
import { createToken } from '../../config/verify';

export function index(req, res) {
    res.send('User api is working now');
}
export function show(req, res) {

}
export function register(req, res) {
    User.findOne({ email: req.body.email })
        .exec((err, userObj) => {
            if (err) {
                return res.json({ success: false, data: null, error: 'Contact support' });
            }
            else if (userObj == null) {
                let pwHash = crypto.createHmac('sha1', config.salt).update(req.body.password).digest('hex');
                let user = {
                    username: req.body.username,
                    email: req.body.email,
                    password: pwHash
                };
                User.create(user)
                    .then(user => {
                        return res.json({ success: true, data: user, error: null });
                    })
                    .catch(err => {
                        console.error('err', err);
                        return res.json({ success: false, data: null, error: 'Contact support' });
                    });
            }
            else {
                return res.json({ success: false, data: 'User already exists', error: null });
            }
        });
}
// login
export function login(req, res) {
    User.findOne({ email: req.body.email })
        .exec((err, userObj) => {
            if (err) {
                return res.json({ success: false, data: null, error: err });
            }
            else if (!userObj) {
                return res.json({ success: false, data: null, error: 'Email address not found' });
            }
            let hash = crypto.createHmac('sha1', config.salt).update(req.body.password).digest('hex');
            if (hash == userObj['password']) {
                let currentUser = {
                    id: userObj._id,
                    username: userObj['username'],
                    email: userObj['email'],
                }
                console.log('login', currentUser);
                console.log('login1', userObj);
                let token = createToken(currentUser);
                currentUser['token'] = token;
                return res.json({ success: true, data: currentUser, error: null });
            }
            else {
                return res.json({ success: false, data: null, error: 'Incorrect Password!' });
            }
        });
}

