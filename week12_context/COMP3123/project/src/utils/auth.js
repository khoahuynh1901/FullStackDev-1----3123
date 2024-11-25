import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export const createToken = (data) => jwt.sign(data, SECRET_KEY, { expiresIn: '1h' });

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (err) {
    return null;
  }
};
