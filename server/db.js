const POOL = require("pg").Pool;
const pool = new POOL({
    connectionString: "postgres://econ_b96y_user:FN1oNt6KxjmgkKt57FHFIBPhjgKUHOTR@dpg-cnkk0lqcn0vc73d76uk0-a/econ_b96y",
     ssl: {
        rejectUnauthorized: false
    }

})

module.exports = pool;