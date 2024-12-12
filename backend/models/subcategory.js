const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
        maxlength: 500,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',  // Reference to Category model
        required: true
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
        default: Date.now,
    },
});

exports.SubCategory = mongoose.model('SubCategory', subCategorySchema);
