import Post from "../models/Post.js"

/* CREATE */
export const createPost = async (req, res) => {
    try{
        const { userId, description, picturePath } = req.body;
        const user = await user.findById(userId);
        const newPost = new Post ({
            userId,
            fistName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        })
        await newPost.save();

        const post = await Post.find();

    } catch (err){
        res.status(409).json({ message: err.message })
    }

};