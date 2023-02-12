const mongoose = require('mongoose');

const LearnSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    discordURL : { type: String, required: true },
    registrationURL : { type: String, required: true },

}, {timestamps: true});

mongoose.models = mongoose.models || {};
export default mongoose.models.Learn || mongoose.model('Learn', LearnSchema);