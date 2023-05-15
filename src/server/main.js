const express = require("express");
const ViteExpress = require("vite-express");
const {login, register} = require('./controllers/auth')
const db = require('./util/database')
const {User, Post, Like} = require('./util/models');
const { addPost, getPosts } = require("./controllers/postController");

const app = express();
app.use(express.json())

//! associations
User.hasMany(Post)
Post.belongsTo(User)

Like.belongsTo(Post)
Post.hasMany(Like)

Like.belongsTo(User)
User.hasMany(Like)

app.post('/api/register', register)
app.post('/api/login', login)
app.post('/api/addPost', addPost)
app.get('/api/getPosts', getPosts)

db.sync()

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
