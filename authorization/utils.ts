import { DgraphClient, DgraphClientStub, grpc, Txn } from 'dgraph-js';
import * as fs from 'fs';
import * as jwt from 'jsonwebtoken';


const ACCESS_TOKEN_DURATION = "15m";
const RELOAD_TOKEN_DURATION = "30d";

const PRIVATE_KEY = fs.readFileSync('private.key');
const SIGN_OPTIONS: jwt.SignOptions = {
    algorithm: "RS256",
};

const clientStub = new DgraphClientStub(
    "alpha:9080",
    grpc.credentials.createInsecure()
);

const client = new DgraphClient(clientStub);

function generateToken(payload: any, expiresIn: string | number) {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, PRIVATE_KEY, { ...SIGN_OPTIONS, expiresIn } , (err, token) => {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

export async function generateAccessToken(userid: string) {
   return await generateToken({ user: userid }, ACCESS_TOKEN_DURATION);
}

export async function generateReloadToken(userid: string) {
    return await generateToken({ user: userid }, RELOAD_TOKEN_DURATION);
}

async function query(query: string, variables: any) {
    query = `query { ${query} }`;
    const tx = client.newTxn();
    return await tx.queryWithVars(query, variables);
}

export async function checkUser(username: string, password: string) {
    const response = await query(`
        checkUserPassword(username: $username, password: $password) {
            username
        }
    `, { username, password });
    return response;
}