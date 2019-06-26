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

server.post("/projects/:index/tasks", (req, res) => {
  const { title } = req.body;
  const { index } = req.params;

  projetos[index - 1]["tasks"].push(title);

  return res.json(projetos);
});

server.put("/projects/:index", (req, res) => {
  const { title } = req.body;
  const { index } = req.params;

  projetos[index - 1]["title"] = title;

  return res.json(projetos);
});

server.delete("/projects/:index", (req, res) => {
  const { index } = req.params;

  projetos.splice(index - 1, 1);

  return res.json(projetos);
});

server.listen(3000);
