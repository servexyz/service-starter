const { send } = require("micro");
const { router, get } = require("microrouter");

const hello = (req, res) => send(res, 200, `Hello ${req.params.who}`);

const notfound = (req, res) => send(res, 404, "No route found");

module.exports = router(get("/hello/:who", hello), get("/*", notfound));

/* eg. 
Dev: http://localhost:3000/hello/alec
Dev:built: http://localhost:3000/hello/alec
Docker: http://localhost:8080/hello/alec
*/
