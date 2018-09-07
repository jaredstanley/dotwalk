// import utils from './utils';
// import imgList from './myjsonfile';
// import { writeFile } from 'fs-web';

var _App = {
//
init: function(){
    window.addEventListener('resize', _App.resize, false);
    window.addEventListener('orientationchange', _App.resize, false);
    document.body.addEventListener("touchmove", function(event) { event.preventDefault();    event.stopPropagation();}, false);
    // _App.createNewCanvas();
    _App.connectCanvas();
    _App.resize();
  },
  connectCanvas:function(){
    console.log("connectCanvas");
    _App.canvas = document.getElementById("gameCanvas");
    _App.ctx = _App.canvas.getContext("2d");
  },
  createNewCanvas:function(){
    console.log("createNewCanvas");
    var c = document.createElement('canvas');
    c.setAttribute("id", "canvas");
    c.setAttribute("width", _App.width);
    c.setAttribute("height", _App.height);
    document.body.appendChild(c);
    _App.canvas = document.getElementById("canvas");
    _App.ctx = _App.canvas.getContext("2d");
    console.log("_App.canvas.width");
  },
  update:function(){
    console.log("setup");
    _App.ctx.fillStyle = _App.ctx.strokeStyle="#800800";
    _App.ctx.lineWidth=10;
    _App.ctx.arc(_App.canvas.width/2,_App.canvas.height/2,150,0,2*Math.PI);
    // _App.ctx.beginPath();
    // _App.ctx.moveTo(110,222);
    // _App.ctx.lineTo(200,150);
    _App.ctx.stroke();
    _App.ctx.font = "30px Arial";
    _App.ctx.lineWidth=1;
    _App.ctx.strokeText("This is the end",20,50);
    _App.ctx.fillText("My only friend, the end.",20,100);
  },
  draw:function() {
        _App.ctx.strokeStyle = '#fe0000';
        _App.ctx.lineWidth = '5';
        _App.ctx.strokeRect(0, 0, _App.canvas.width, _App.canvas.height);
        _App.update();
  },
  resize:function(){
    console.log("resiiiize");
   _App.canvas.width = Math.min(window.innerWidth, 600);
   _App.canvas.height = Math.min(window.innerHeight, 900);
   _App.draw();
  }
}
window.onload=function(){
  window._App = _App;
  _App.init();

}
