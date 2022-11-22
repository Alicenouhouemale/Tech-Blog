const { Post } = require("../models");

const postdata = [
  {
    Title: "What's computer programming ?",
    body: "Is the process of performing a particular computation, usually by designing and building an executable computer program.",
    user_id: 1,
  },

  {
    Title: "What tasks involve programming ?",
    body: "Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms",
    user_id: 2,
  },

  {
    Title: "What programming language do you know ?",
    body: "JavaScript, Node.js, Express.js, Python, etc...",
    user_id: 3,
  },
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;
