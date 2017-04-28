import * as jwt from 'jsonwebtoken';
import config from './config';


export function createToken(user: Object) {
    let token = jwt.sign(user, config.jwtSecret, { expiresIn: "90 days" }); //expires in 90 days
    return token;
}

export function verifyToken(token: string) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwtSecret, (err, verifiedJwt) => {
      if (err) {
        console.log('err', err);
        reject(err);
      } else {
        console.log('verifiedJwt',verifiedJwt)
        resolve(verifiedJwt);
        return verifiedJwt;
      }
    });
  });
}
