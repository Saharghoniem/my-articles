const express = require("express");
const router = express.Router();
const articleController=require("../articleController/articleController")

// PATH start with '/all-articles'
// was in app.js
router.get("/",articleController.artice_get_index
);

router.post("/",articleController.artice_post_index
);

router.get("/:id",articleController.artice_get2_index);

router.delete("/:id",articleController.artice_delete_index);

module.exports = router;

