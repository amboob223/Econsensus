const POOL = require("pg").Pool;
const pool = new POOL({
    connectionString: "postgres://econsensus_user:3kkOxuBGbc3AIMixgep2qlgWNqUQ6MF9@dpg-cnkcck6d3nmc73e70qv0-a.oregon-postgres.render.com/econsensus",
     ssl: {
        rejectUnauthorized: false
    }

})

module.exports = pool;