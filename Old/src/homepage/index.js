var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next) {
	title('Platzigram');
	var main = document.getElementById('main-container');
	var pictures = [
		{
			user:{
				username:'Miguel Cobas',
				avatar:'https://pbs.twimg.com/profile_images/460226704288403456/QkPp5xPU.png'
			},
			url: 'office.jpg',
			likes: 10,
			liked: true,
			createdAt: new Date()
		},
		{
			user:{
				username:'Miguel Cobas',
				avatar:'https://pbs.twimg.com/profile_images/460226704288403456/QkPp5xPU.png'
			},
			url: 'office.jpg',
			likes: 2,
			liked: false,
			createdAt: new Date().setDate(new Date().getDate()-10)
		}
	];

  	empty(main).appendChild(template(pictures));
});

