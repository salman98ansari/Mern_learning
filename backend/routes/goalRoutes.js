const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ message: "Getting Goalssss" });
});

router.post("/", (req, res) => {
  res.status(200).send({ message: "Set Goalssss" });
});

router.put("/:id", (req, res) => {
  res.status(200).send({ message: `update id of ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).send({ message: `delete id of ${req.params.id}` });
});

module.exports = router;
