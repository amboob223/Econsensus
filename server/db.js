const POOL = require("pg").Pool;
const pool = new POOL({
    user:"econsensus_user",
    database:"econsensus",
    port:5432,
    password:"3kkOxuBGbc3AIMixgep2qlgWNqUQ6MF9",
    host:"dpg-cnkcck6d3nmc73e70qv0-a.oregon-postgres.render.com"
})

module.exports = pool;