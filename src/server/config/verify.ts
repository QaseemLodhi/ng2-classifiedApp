import * as jwt from 'jsonwebtoken';
import config from './config';


export function createToken(user: Object) {
    console.log('user Obj', user);
    let token = jwt.sign(user, config.jwtSecret, { expiresIn: "90 days" }); //expires in 90 days
    return token;
}

export function verifyToken(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, (err, verifiedJwt) => {
      if (err) {
        reject(err);
      } else {
        resolve(verifiedJwt);
      }
    });
  });
}