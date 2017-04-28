import {verifyToken} from './verify';

export function authenticate(event) {
    return new Promise((resolve, reject) => {
        let token;
        if (event.query && event.query.token) {
            token = event.query.token;
        }
        if (event.path && event.path.token) {
            token = event.path.token;
        }
        if (event.pathParameters && event.pathParameters.token) {
            token = event.pathParameters.token;
        }
        if (event.body && event.body.token) {
            token = event.body.token;
        }
        if (event.token) {
            token = event.token;
        }
        if (token) {
            console.log('auth5');
            verifyToken(token.toString()).then(verifiedJwt => {
                console.log('verifiedJwt', verifiedJwt);
                console.log('auth6');
                console.log('-----------------------------*** Authorized');
                resolve(verifiedJwt);
            }).catch(err => {
                console.log('auth7');
                console.log('-----------------------------*** Unauthorized, Error: ', err);
                console.log(err);
                // context.fail('Unauthorized');
                // cb('Unauthorized');
            });
        } else {
            console.log('auth8', 'Token Missing');
            // context.fail('Token missing!');
            // cb('Token missing!');
        }
    });

}

