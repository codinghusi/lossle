
async function loginResolver(payload) {
    console.log(payload);
    return login(payload, payload);
}

async function login(username, password) {
    return {
        accessToken: "foo",
        refreshToken: "bar",
    }
}

self.addGraphQLResolvers({
    'Query.accessToken': loginResolver
});
