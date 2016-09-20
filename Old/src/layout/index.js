var yo = require('yo-yo');
var translate = require('../translate');

module.exports = function layout(content){
  return yo`<div>
    <nav class="header">
    <div class="nav-wrapper">
      <div class="container">
        <div class="row">
          <div class="col s12 m2 offset-m1">
          <a href="/" class="brand-logo platzigram">Platzigram</a>
          </div> 
          <div class="col s2 m6 push-s10 push-m10 top">
            <a href="#" class="btn btn-lager btn-flat dropdown-button" data-activates="drop-user">
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            <ul id="drop-user" class="dropdown-content menu">
            <li><a href="#">${translate.message('logout')} </a></li>
            </ul>
          </div>
        </div>
      </div> 
    </div>   
  </nav>
  <div class="content">
    ${content}
  </div>
</div>`;

}

