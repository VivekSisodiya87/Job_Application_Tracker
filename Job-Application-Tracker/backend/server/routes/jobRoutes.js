const express = require("express");
const Job = require("../models/Job");
const auth = require("../middleware/auth");

const router = express.Router();

// GET all jobs for logged-in user
router.get("/", auth, async (req, res) => {
  const jobs = await Job.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(jobs);
});

// POST create job
router.post("/", auth, async (req, res) => {
  const { company, position, status, notes } = req.body;
  const job = new Job({ user: req.user.id, company, position, status, notes });
  await job.save();
  res.status(201).json(job);
});

// PUT update job
router.put("/:id", auth, async (req, res) => {
  const job = await Job.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );
  res.json(job);
});

// DELETE job
router.delete("/:id", auth, async (req, res) => {
  await Job.findOneAndDelete({ _id: req.params.id, user: req.user.id });
  res.json({ message: "Job deleted" });
});

module.exports = router;
