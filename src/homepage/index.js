var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
var request = require('superagent');
var header = require('../header');
var axios = require('axios');

page('/', header, loading, asyncLoad, function (ctx, next) {
  title('Platzigram');
  var main = document.getElementById('main-container');

  empty(main).appendChild(template(ctx.pictures));
})
// SUPERAGENT SE USAN CALLBACKS 
/*function loadPictures(ctx, next) {
  request
  .get('/api/pictures')
  .end(function (err, res){
    if (err) return console.log(err);

    ctx.pictures = res.body;
    next()
  })

}*/
//AXIOS SOPORTA PROMISE 
/*
function loadPicturesAxios(ctx, next) {
  axios
  .get('/api/pictures')
  .then(function (res){
    ctx.pictures = res.data;
    next()
  })
  .catch(function(err){
    console.log(err)
  })

}*/
// FETCH NO REQUIERE INSTALAR NADA Y ES SOPORTADO POR LOS NAVEGADORES Y LOS QUE NO HAY POLYFILL PARA AYUDARLO
/*function loadPicturesFetch(ctx,next){
  fetch('/api/pictures')
    .then(function (res){
      return res.json();
    })
    .then(function (pictures){
      ctx.pictures = pictures;
       next()
    })
    .catch(function(err){
      console.log(err);
    })
}*/
/*
 Requiere agregar  en dev
 babel-preset-es2015 
 babel-plugin-transform-regenerator
 babel-plugin-syntax-async-functions
 babel-polyfill 

*/

function loading(ctx,next){
  var el = document.createElement('div');
  el.classList.add('loader');
  document.getElementById('main-container').appendChild(el);
  next();
}
async function asyncLoad(ctx,next){
    try {
      ctx.pictures = await fetch('/api/pictures').then(res => res.json());
      next();
    } catch(err){
      return console.log(err);
    }
}
