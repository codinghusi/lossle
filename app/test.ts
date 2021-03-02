

fetch('database/graphql', {
    method: 'POST',
    body: JSON.stringify({
        query: `
            queryUser {
                id, name
            }
        `
    })
}).then(async response => {
    const json = await response.json();
    console.log(json);
})