 app.draw = function(){
    var ctx = this.ctx; 
    ctx.save(); 
    ctx.scale(this.canvas_scale,this.canvas_scale);     
    ctx.fillStyle = "#08090d";
    ctx.fillRect(0, 0, this.canvas_scale_width+1, this.canvas_scale_height+1);
    ctx.fillStyle = "#0d1015";
    ctx.fillRect(10.5, 10.5, 700, 200);
    
    ctx.lineWidth = this.canvas_scale;
    ctx.strokeStyle = "#2d566c";
    ctx.beginPath();
    ctx.rect(10.5, 10.5, 700, 200);
    ctx.stroke();

    ctx.strokeStyle = "#27384c";
    ctx.beginPath();
    ctx.moveTo(15.5, 45.5);
    ctx.lineTo(700-5.5, 45.5);
    ctx.stroke();
    //ctx.fillStyle = "rgb(255,165,0)";
    ctx.fillStyle = "#6fd594";
    ctx.font = '18px Arial ';
    ctx.fillText("Hello world "+(window.devicePixelRatio*100)+"% "+this.last_event, 20, 40);
    ctx.restore(); 
   }  

