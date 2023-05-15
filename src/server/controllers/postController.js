const {Post, Like, User} = require('../util/models')

module.exports = {
  addPost: async (req, res) => {
    try {
      
      let newPost = await Post.create(req.body)
      return res.status(200).send(newPost)
    } catch (error) {
      return res.status(400).send("OOPSIE, NO DAISY")
    }
  },
  getPosts: async (req, res) => {
    try {
      let posts = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ["username"]
          }
        ]
      })
      return res.status(200).send(posts)
    } catch (error) {
      return res.status(400).send('ALL OOPSIE, NO DAISY')
    }
  }
}