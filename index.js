// import utils from './utils';
// import imgList from './myjsonfile';
// import { writeFile } from 'fs-web';

var _App = {
//
  init: function(){
    _App.createNewCanvas();
    _App.setup();

  },
  createNewCanvas:function(){
    console.log("createNewCanvas");
    var c = document.createElement('canvas');
    c.setAttribute("id", "canvas");
    c.setAttribute("width", 500);
    c.setAttribute("height", 400);
    document.body.appendChild(c);
    _App.canvas = document.getElementById("canvas");
    _App.ctx = _App.canvas.getContext("2d");
    console.log("_App.canvas.width");
  },
  setup:function(){
    console.log("setup");
    _App.ctx.strokeStyle="#800800";
    _App.ctx.lineWidth=10;
    _App.ctx.beginPath();
    _App.ctx.moveTo(110,222);
    _App.ctx.lineTo(300,150);
    _App.ctx.stroke();
  }
}
window.onload=function(){
  _App.init();
}
