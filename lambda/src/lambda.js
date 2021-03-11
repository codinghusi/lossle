
async function loginResolver({args: {username, password}}) {
    return {
        accessToken: "foo",
        refreshToken: "bar",
    }
}

self.addGraphQLResolvers({
    'Query.authenticate': loginResolver
});
