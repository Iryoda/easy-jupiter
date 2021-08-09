module.exports = {
    publicRuntimeConfig: {
        apiKey: `${process.env.API_KEY}`,
        clientId: `${process.env.CLIENT_ID}`,
        discoveryDocs: [`${process.env.DISCOVERY_DOCS}`],
        scope: `${process.env.SCOPE}`
    },
    future: {
        webpack5: true
    }
}
