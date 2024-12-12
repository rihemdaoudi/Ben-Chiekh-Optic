const {SubCategory} = require('../models/subcategory');
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) => {
    const subcategoryList = await SubCategory.find();

    if(!subcategoryList) {
        res.status(500).json({success: false})
    }
    res.send(subcategoryList);
})

router.post('/', async (req, res) => {
    let subcategory = new SubCategory({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
        image: req.body.image
    })
    subcategory = await subcategory.save();

    if(!subcategory)
        return res.status(404).send('the subcategory cannot be created');

    res.send(subcategory);
    })

module.exports = router;