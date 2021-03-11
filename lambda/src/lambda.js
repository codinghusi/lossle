
function loginResolver({args: {username, password}}) {
    return login(username, password);
}

async function login(username, password) {
    return {
        accessToken: "foo",
        refreshToken: "bar",
    }
}

self.addGraphQLResolvers({
    'Query.authenticate': loginResolver
});
