const { send } = require("micro");
const { router, get } = require("microrouter");

const root = (req, res) => send(res, 200, "Running");
const hello = (req, res) => send(res, 200, `Hello ${req.params.who}`);
const notfound = (req, res) => send(res, 404, "No route found");

module.exports = router(
  get("/", root),
  get("/hello/:who", hello),
  get("/*", notfound)
);
/* 
  ! NOTE: "/*" is not an exact match. 
  ! Meaning, notfound path must be last. 
  ! If first, it will prevent all other routes from being identified
*/

/* eg. 
Dev: http://localhost:3000/hello/alec
Dev:built: http://localhost:3000/hello/alec
Docker: http://localhost:8080/hello/alec
*/
