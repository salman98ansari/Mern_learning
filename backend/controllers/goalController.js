// @desc  Get Goals
// @route GET api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).send({ message: "Getting Goals" });
};

// @desc  set Goals
// @route  POST api/goals
// @access Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("PLease Add Text Field");
  } else {
    res.status(200).send(req.body);
  }
  //   res.status(200).send({ message: "Set Goals" });
};

// @desc  Update  Goals
// @route PUT /goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).send({ message: `update id of ${req.params.id}` });
};

// @desc  delete Goals
// @route DELETE api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).send({ message: `delete id of ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
