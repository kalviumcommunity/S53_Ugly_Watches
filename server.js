const express = require("express");
const req = require("express/lib/request");
const app = express();
const port = process.env.PUBLIC_PORT|| 3000;

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
app.get("/ping", (req, res) => {
  res.send("pong");
});

module.exports = app;
