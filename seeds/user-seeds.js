const { User } = require('../models');

const userdata = [
  {
    username: 'sdfsdfasdfv1',
    email: 'rememberme1@welcome.com',
    password: 'password123',
  },
  {
    username: 'fsdatrgdffjghjk1',
    email: 'rememberme2@words.com',
    password: 'password123',
  },
  {
    username: 'idrgddfsg1',
    email: 'rememberme3@email.com',
    password: 'password123',
  },
  {
    username: 'asdhgdffysd1',
    email: 'rememberme4@email.com',
    password: 'password123',
  },
  {
    username: 'dirtyone1',
    email: 'rememberme5@email.com',
    password: 'password123',
  },
  {
    username: 'mdirtyone2',
    email: 'ohhello1@terriblecast.com',
    password: 'password123',
  },
  {
    username: 'dirtyone3',
    email: 'ohhello2@email.com',
    password: 'password123',
  },
  {
    username: 'dirtyone4',
    email: 'ohhello3@email.com',
    password: 'password123',
  },
  {
    username: 'justtesting1',
    email: 'ohhello4@google.ru',
    password: 'password123',
  },
  {
    username: 'jjusttesting2',
    email: 'ohhello5@something.com',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;