const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models");

const users = [
  {
    username: "Sophia",
    password: "Sophiapassword",
  },
  {
    username: "Ken",
    password: "Kenpassword",
  },
  {
    username: "Imogen",
    password: "Imogenpassword",
  },
];

const blogs = [
  {
    title: "My first post",
    content: "Hello",
    userId: 1,
  },
  {
    title: "My second post",
    content: "How are you",
    userId: 1,
  },
  {
    title: "Kens first post",
    content: "Hello I am Ken",
    userId: 2,
  },
  {
    title: "Imogens first post",
    content: "Hello I am Imogen",
    userId: 3,
  },
];

const comments = [
  {
    body: "Beautiful day",
    blogId: 1,
    userId: 1,
  },
  {
    body: "Agreed",
    blogId: 3,
    userId: 2,
  },
  {
    body: "Fantastic day!",
    blogId: 4,
    userId: 1,
  },
  {
    body: "Hello summer!",
    blogId: 2,
    userId: 3,
  },
];

const plantSeeds = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(users, {
      individualHooks: true,
    });
    await Blog.bulkCreate(blogs);
    await Comment.bulkCreate(comments);
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

plantSeeds();
