import Post from "../models/Post.js"

/* CREATE */
export const createPost = async (req, res) => {
    try{
        const { userId, description, picturePath } = req.body;
        const user = await user.findById(userId);
        const newPost = new Post ({
            userId,
            fistName ,
            lastName,
            location,
            description
        })

    } catch (err){
        res.status(409).json({ message: err.message })
    }

};