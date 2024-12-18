const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        default: '',
        max_length: 500,
    },
    icon: {
        type: String,
    },
    color: {
        type: String,
    },
    image: {
        type: String,
        default: '',
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    displayOrder: {
        type: Number,
        default: 0,
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
    }

});

exports.Category = mongoose.model('Category', categorySchema);
