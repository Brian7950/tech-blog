const router = require('express').Router();
const { Post, Comment } = require('../models');
// TODO: Import the custom middleware
const withAuth = require('../utils/auth');

// GET all formatedPostData for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [
        {
          model: Comment,
    
        },
      ],
    });

    const formatedPostData = dbPostData.map((Post) =>
      Post.get({ plain: true })
    );

    res.render('homepage', {
      formatedPostData,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Post
// TODO: Replace the logic below with the custom middleware
router.get('/Post/:id', withAuth, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the Post
    try {
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: Comment,
          },
        ],
      });
      const Post = dbPostData.get({ plain: true });
      res.render('Post', { Post, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one Comment
// TODO: Replace the logic below with the custom middleware
router.get('/Comment/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the Comment
    try {
      const dbCommentData = await Comment.findByPk(req.params.id);

      const Comment = dbCommentData.get({ plain: true });

      res.render('Comment', { Comment, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
