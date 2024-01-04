import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    imgUrl:{
        type: String,
        required: true,
    },
    videoUrl:{
        type: String,
        required: true,
    },
    views:{
        type: String,
        default:0,
    },
    tags:{
        type: [String],
        default: [],
    },
    likes:{
        type: [String],
        default: [],
    },
    dislikes:{
        type: [String],
        default: [],
    }

}, { timestamps: true })

const VIDEOS = mongoose.model("Videos",VideoSchema)

export default VIDEOS