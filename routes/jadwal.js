const express = require("express");
const router = express.Router();
const JadwalController = require("../controllers/jadwal_controller")

router.post("/post", JadwalController.posting_jadwal)
router.get("/get", JadwalController.getAll)

module.exports = router