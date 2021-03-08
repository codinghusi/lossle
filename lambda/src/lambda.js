
async function loginResolver(payload) {
    console.log(payload);
    return login(payload, payload);
}

async function login(username, password) {
}

self.addGraphQLResolvers({
    'Query.accessToken': loginResolver
});
