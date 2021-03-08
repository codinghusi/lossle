import * as express from 'express';
import { checkUser, PUBLIC_KEY } from './utils';

const router = express.Router();
const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use('/', router);

router.get('/access_token', async (request, response) => {
    // getting provided info
    const { username, password } = request.query;

    // validation
    if (!username || !password) {
        response.status(400).send({
            state: 'error',
            error: 'please provide an username and a password'
        });
    }

    // checking
    const result = await checkUser(
        username as string,
        password as string
    );
    console.log(result);
});

router.get('public_key', async (request, response) => {
    response.send(PUBLIC_KEY);
});

app.listen(3000, () => console.log("authorization server ready!"));
