'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
mongoose schema for todo object
*/
let TodoSchema = new Schema ({
    Id: {
        type: Number,
        required: "Id is missing"
    },
    title: {
        type: String,
        required: "Title is missing"
    },
    description: {
        type: String,
        required: "Description is missing"
    },
    createdDate: {
        type: Date,
        default: function () {
            return Date.now();
        }
    },
    modifiedDate: {
        type: Date,
        default: function () {
            return Date.now();
        }
    }
},
{
    versionKey: false
});

TodoSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

TodoSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('todo', TodoSchema);
