const { User } = require("../models");

const userdata = [
  {
    username: "Alene",
    password: "password213",
  },
  {
    username: "Sena",
    password: "password987",
  },
  {
    username: "Lyne",
    password: "password068",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
