var express = require('express');
var multer  = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
});
 
var upload = multer({ storage: storage }).single('picture');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index', { title: 'Platzigram' });
});

app.get('/signup', function (req, res) {
  res.render('index', { title: 'Platzigram - Signup' });
});

app.get('/signin', function (req, res) {
  res.render('index', { title: 'Platzigram - Signin' });
});

app.get('/:username', function(req, res){
	res.render('index', {title: `Platzigram - ${req.params.username}` });
});
app.get('/:username/:id', function(req, res){
	res.render('index', {title: `Platzigram - ${req.params.username}` });
});
app.get('/api/user/:username', function (req, res){
	const user = {
		username:'mikecobas',
		avatar:'https://pbs.twimg.com/profile_images/460226704288403456/QkPp5xPU.png',
		pictures: [
			{
				id:1,
				src: 'https://grandecabeza.files.wordpress.com/2015/03/social-423d47d2f6d6-w705-h600.jpg',
				likes: 10
			},
			{
				id:2,
				src: 'https://platzi.com/blog/wp-content/uploads/2015/05/lanzamientos.jpg',
				likes: 254
			},
			{
				id:3,
				src: 'http://i.blogs.es/213594/platzimx/650_1200.jpg',
				likes: 22
			},
			{
				id:4,
				src: 'https://i.ytimg.com/vi/3VtsyhFKK7g/maxresdefault.jpg',
				likes: 35
			}
		]
	}
	res.send(user);
})


app.get('/api/pictures', function (req,res) {
		var pictures = [
	    {
	      user: {
	        username: 'mikecobas',
	        avatar: 'https://pbs.twimg.com/profile_images/460226704288403456/QkPp5xPU.png'
	      },
	      url: 'office.jpg',
	      likes: 0,
	      liked: false,
	      createdAt: new Date().getTime()
	    },
	    {
	      user: {
	        username: 'mikecobas',
	        avatar: 'https://pbs.twimg.com/profile_images/460226704288403456/QkPp5xPU.png'
	      },
	      url: 'office.jpg',
	      likes: 10,
	      liked: true,
	      createdAt: new Date().setDate(new Date().getDate() - 10)
	    }
	  ];

	  setTimeout(() => res.send(pictures),2000);

	
})
app.post('/api/pictures', function (req, res){
	upload(req, res, function (err){
		if(err){
			return res.send(500, "Error uploadinf file");
		}
		res.send('File upload');
	})
})
app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Platzigram escuchando en el puerto 3000');
})