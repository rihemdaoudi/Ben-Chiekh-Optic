const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type : String,
        required : true,
        unique: true,

        },
    description : {
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    images: [{
        type: String,

    }], 
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubCategory',  // Reference to SubCategory model
        required: true,
    },
    category : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    discount: {
        type: Number,
        default: 0, // Optional discount (as percentage or fixed value)
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});;

productSchema.set('toJSON', {
    virtuals: true,
});
exports.Product = mongoose.model('Product', productSchema);

