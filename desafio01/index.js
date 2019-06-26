const express = require("express");
const server = express();

server.use(express.json());

const projetos = [];

server.get("/projects", (req, res) => {
  return res.json(projetos);
});

server.post("/projects", (req, res) => {
  const { projeto } = req.body;
  projeto["tasks"] = [];
  projetos.push(projeto);

  return res.json(projetos);
});

server.post("/projects/:index", (req, res) => {
  const { title } = req.body;
  const { index } = req.params;

  projetos[index - 1]["tasks"].push(title);

  return res.json(projetos);
});

server.post("/projects");

server.listen(3000);
