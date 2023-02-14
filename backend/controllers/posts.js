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
        res.status(201).json(post); //Grab all the posts.

    } catch (err){
        res.status(409).json({ message: err.message })
    }
};

/* READ */
export const getFeedPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({ message: err.message });

    }
};

export const getUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const post = await Post.find( { userId });
        res.status(200).json(post);

    } catch (err) {
        res.status(404).json( {message: err.message })
    }
};