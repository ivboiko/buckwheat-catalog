const express = require("express");
const favicon = require("express-favicon");
const path = require("path");

const Goods = require("./server/moduls/Goods");

const parser = require("./server/parser");
const app = express();

app.use(favicon(__dirname + "/build/favicon.ico"));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});

app.get("/parse", async (req, res) => {
  const data = await parser();
  res.send(data);
});

app.get("/data", async (req, res) => {
  // const data = await parser();
  const data = await Goods.find({});
  res.json(data);
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;

// старі налаштування входа в сервер
// const start = async () => {
//   try {
//     // Connect to DB
//     await mongoose.connect(config.mongoUri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//
//     await app.listen(port, async () => {
//       console.log(`Server start on PORT ${port}`);
//       if (process.env.NODE_ENV === "production") {
//         await updateDb();
//         setInterval(updateDb, 1500000); // 25 minutes
//       }
//     });
//   } catch (e) {
//     console.log(e.message);
//     throw e;
//   }
// };
//
// start();

