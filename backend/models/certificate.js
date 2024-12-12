const mongoose = require('mongoose');

const certificateSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to User model (if you have one for users)
        required: true,
    },
    filePath: {
        type: String,
        required: true,  // Path to the uploaded certificate file (e.g., stored in Cloud storage)
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending',
    },
    remarks: {
        type: String,
        default: '',
    },
    dateUploaded: {
        type: Date,
        default: Date.now,
    }
});

exports.Certificate = mongoose.model('Certificate', certificateSchema);
