import mongoose from 'mongoose';

const rewardSchema = mongoose.Schema({
    datetime: { type: Date, default: Date.now },
    points: { type: Number, required: true },
    givenBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    givenTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})

const Reward = mongoose.model('Reward', rewardSchema);
export default Reward;