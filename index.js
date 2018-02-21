const micro = require("micro");

const server = micro(async (req, res) => {
  return "Welcome";
});

server.listen(8081);
