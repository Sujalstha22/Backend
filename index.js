import "dotenv/config";
import express from "express";

const app = express();

const port = process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("Hello World!!!");
// });

// app.get("/twitter", (req, res) => {
//   res.send("this is twitter page");
// });

// app.get("/login", (req, res) => {
//   res.send("<h1>This is Login page</h1>");
// });

app.get("/api/resturants", (req, res) => {
  const Resturants = [
    {
      id: 1,
      name: "vault",
      location: "vasantapur",
    },
    {
      id: 2,
      name: "Subway",
      location: "kamalPokhari",
    },
  ];
  res.send(Resturants);
});
app.listen(port, () => {
  console.log(`Example Listening on port ${port}`);
});
