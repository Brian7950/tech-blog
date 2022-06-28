const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'HEY THERE!',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Some random text here!',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'This is cool!.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'random words! sdoisdosid sodisd',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'In hac habitasse platea dictumst.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Seed this!',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Some random text here!',
    user_id: 6,
    post_id: 7
  },
  {
    comment_text: 'Wheres my money!?',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Oh hello there!',
    user_id: 6,
    post_id: 12
  },
  {
    comment_text: 'ipsum!',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'random words! sdoisdosid sodisd',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'Lions and tigers!.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'I like your dog.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:'Lets Go!',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text: 'Awwwww rats!',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'Lets Go!',
    user_id: 8,
    post_id: 2
  },
  {
    comment_text:'Lets Go!',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Hey check this out',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:'huh????????',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:'what?! , huh???????',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'COLD!',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'This smells like pizza!',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'coooooool',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:'Do you know the muffin man?',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text: 'I like your dog.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Thats too far!',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'I like your dog.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Not here, nope!',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Thats gonna be a problem',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Make it go poof!',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'I wont!',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Not here, nope!',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Thats gonna be a problem.',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'NEAT-O!',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'YAY',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'YAY',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'I did not know that.',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'GO GO GO GO GO',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'I did not know that',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'YAY',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:'Thats gonna be a problem',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:'I did not know that',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'Nice',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'Dont do that!',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:'MONEY PLEASE!!!',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Oh!',
    user_id: 4,
    post_id: 19
  },
  {
    comment_text: 'NACHOS!! mmmmm.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text:'Im hungry!',
    user_id: 2,
    post_id: 19
  },
  {
    comment_text: 'wow no way!.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Yeah!?!',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;