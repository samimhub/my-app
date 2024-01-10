import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
})

export default mongoose.models.User || mongoose.model("User", userSchema)