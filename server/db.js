const POOL = require("pg").Pool;
const pool = new POOL({
    connectionString: "postgres://monk:vwAzwGkadcVMGxr3mMJ2btDrlUK7fcWe@dpg-cnki566n7f5s73b08glg-a.oregon-postgres.render.com/econ_1h2k",
     ssl: {
        rejectUnauthorized: false
    }

})

module.exports = pool;