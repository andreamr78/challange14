import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    // TODO: verify the token exists and add the user data to the request object
    const token = req.headers['authorization']?.split(' ')[1];
    const jwtToken = jwt.decode(token);
    if (jwtToken) {
        const secretKey = process.env.JWT_SECRET_KEY || '';
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = decoded;
            return next();
        });
    }
};
