const express = require("express")
const router = express.Router()

const PhanCongController=require('../Controller/PhanCongController');

router.get('/',PhanCongController.GetAllList);

router.post('/',PhanCongController.createNewRecord);

router.delete('/:mamon/:malop/:magv',PhanCongController.deleteRecord)

module.exports = router;