// import utils from './utils';
// import imgList from './myjsonfile';
// import { writeFile } from 'fs-web';

var _App = {
//
  init: function(){
    _App.createNewCanvas();

  },
  createNewCanvas:function(){
    console.log("createNewCanvas");
    var c = document.createElement('canvas');
    c.setAttribute("id", "canvas");
    c.setAttribute("width", 500);
    c.setAttribute("height", 400);
    document.body.appendChild(c);
    // document.getElementById("body").prepend(c);
    _App.canvas = document.getElementById("canvas");
    _App.ctx = _App.canvas.getContext("2d");
    // console.log(_App.canvas.width);
  }
}
window.onload=function(){
  _App.init();
}
