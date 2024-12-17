const {SubCategory} = require('../models/subcategory');
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) => {
    const subcategoryList = await SubCategory.find();

    if(!subcategoryList) {
        res.status(500).json({success: false})
    }
    res.status(200).send(subcategoryList);
})

router.get('/:id', async(req, res)=>{
    const subcategory = await SubCategory.findById(req.params.id);

    if(!subcategory) {
        res.status(500, json({message: 'The subcategory with the given ID was not found!'}));
    }
    res.status(200).send(subcategory);

})

router.post('/', async (req, res) => {
    let subcategory = new SubCategory({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        isActive: req.body.isActive,
        displayOrder: req.body.displayOrder,
        dateCreated: req.body.dateCreated
    })
    subcategory = await subcategory.save();

    if(!subcategory)
        return res.status(404).send('the subcategory cannot be created');

    res.send(subcategory);
    })

router.put('/:id', async(req, res)=> {
    const subcategory = await SubCategory.findByIdAndUpdate(
        req.params.id,
        {
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        isActive: req.body.isActive,
        displayOrder: req.body.displayOrder,
        dateCreated: req.body.dateCreated
        },
        {new: true}//Return the new data
    )
    if(!subcategory)
        return res.status(404).send('the subcategory cannot be created');

    res.send(subcategory);
    
})

router.delete('/:id', (req, res)=>{
    SubCategory.findByIdAndDelete(req.params.id).then(subcategory =>{
        if(subcategory) {
            return res.status(200).json({success: true, message: 'the subcategory is deleted !'})
        } else {
            return res.status(404).json({success: false, message: 'subcategory not found'});
        }
    }).catch(err =>{
        return res.status(404).json({success: false, error: err})
        
    })
})

module.exports = router;