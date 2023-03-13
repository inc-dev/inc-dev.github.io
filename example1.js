 app.draw = function(){
    var ctx = this.ctx; 
    ctx.save(); 
    ctx.scale(this.canvas_scale,this.canvas_scale);     
    ctx.fillStyle = "#444";
    ctx.fillRect(0, 0, this.canvas_width+1, this.canvas_height+1);                               
    ctx.fillStyle = "rgb(255,165,0)";
    ctx.font = '18px Arial ';
    ctx.fillText("Hello world "+(window.devicePixelRatio*100)+"% "+this.last_event, 10, 30);
    ctx.restore(); 
   }  

