const Pool = require("pg").Pool;

const pool = new Pool({
    user: "rickr",
    password: "Nickel$Metal23",
    database: "best_standards",
    host: "/var/run/postgresql",
    port: 5432
});

module.exports = pool;