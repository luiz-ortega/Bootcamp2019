import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';

class SessionController {
    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string()
                .email()
                .required(),
            password: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return status(400).json({ error: 'Validation failed' });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        if (!password) {
            return res.status(400).json({ error: 'Password does not match' });
        }

        const { id, name } = req.body;

        return res.json({
            user: {
                id,
                name,
                email
            },
            token:
        })
    }
}
