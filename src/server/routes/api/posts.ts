import Post from '../../models/post';

export function getPosts(req, res) {
     console.log(req.body);
  Post.find().sort('-date').exec((err, Todos) => {
    if (err) {
      return res.json({ success: false, data: null, error: err });
    }
    res.json({ success: true, data: Todos, error: null });
  });
}

export function addPost(req, res) {
  if (!req.body.title) {
    return res.json({ success: false, data: null, error: 'Missing post task!' });
    }
  const newPost = new Post(req.body);
  newPost.save((err, saved) => {
      if (err) {
        return res.json({ success: false, data: null, error: err });
    }
    /*Post.findOne({ _id: saved._id }).exec((err, post) => {
        if (err) {
        return res.json({ success: false, data: null, error: err });
        }
      res.json({ success: true, data: post, error: null });
      });*/
    res.json({ success: true, data: saved, error: null });  
  });
}

export function getPost(req, res) {
  Post.findOne({ _id: req.params._id }).exec((err, todo) => {
    if (err) {
      return res.json({ success: false, data: null, error: err });
    }
    res.json({ success: true, data: todo, error: null });
  });
}

export function deletePost(req, res) {
  Post.findOne({ _id: req.params.id }).exec((err, todo) => {
    if (err) {
      return res.json({ success: false, data: null, error: err });
    }
    todo.remove(() => {
      res.json({ success: true, data: null, error: null });;
    });
  });
}

export function updatePost(req, res) {
  Post.findByIdAndUpdate({ _id: req.body.todo.todoId }, { completed: req.body.todo.completed }, (err, result) => {
    if (err) {
      return res.json({ success: false, data: null, error: 'Todo not found' });
    }
    else {
       res.json({ success: true, data: result, error: null });
    }
  })
}
