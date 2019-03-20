module.exports = {
    test: {
        client: 'pg',
        version: '11.2',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '157953',
            database: 'barriga',
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
};