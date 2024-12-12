const {Certificate} = require('../models/certificate');
const express = require('express');
const router = express.Router();


router.get(`/`, async (req, res) => {
    const certificateList = await Certificate.find();

    if(!certificateList) {
        res.status(500).json({success: false})
    }
    res.send(certificateList);
})

// router.post('/', async (req, res) => {
//     let certificate = new Certificate({
//         name: req.body.name,
//         description: req.body.description,
//         icon: req.body.icon,
//         color: req.body.color,
//         image: req.body.image,
//         isActive: req.body.isActive,
//         displayOrder: req.body.displayOrder,
//         dateCreated: req.body.dateCreated
//     })
//     certificate = await certificate.save();

//     if(!certificate)
//         return res.status(404).send('the certificate cannot be created');

//     res.send(certificate);
//     })

module.exports = router;