 app.draw = function(){
    var width = this.canvas_width;
    var height = this.canvas_height;
    var lineWidth = 2;//this.canvas_scale
    var ctx = this.ctx; 
    var shift = 0; //0.5 0
    var fontShift = 0.0; //0.5 0
    ctx.save(); 

    ctx.scale(this.canvas_scale,this.canvas_scale);     
    width = this.canvas_scale_width;
    height = this.canvas_scale_height;


    ctx.fillStyle = "#080808";
    ctx.fillRect(0, 0, width+1, height+1);
    ctx.fillStyle = "#0d1015";
    ctx.fillRect(10+shift, 10+shift, 1400, 200);
    
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#2d566c";
    ctx.beginPath();
    ctx.rect(10+shift, 10+shift, 1400, 200);
    ctx.stroke();

    ctx.strokeStyle = "#27384c";
    ctx.beginPath();
    ctx.moveTo(15+shift, 50+shift);
    ctx.lineTo(1405+shift, 50+shift);
    ctx.stroke();
    //ctx.fillStyle = "rgb(255,165,0)";
    ctx.fillStyle = "#6fd594";

    ctx.font = 'normal 400 32px sofia';//Arial roboto sofia
    ctx.fillText("Hello world "+(window.devicePixelRatio*100)+"% "+this.last_event, 15+fontShift, 42);

    ctx.font = '32px roboto';//Arial roboto sofia
    ctx.fillText("Hello world "+(window.devicePixelRatio*100)+"% "+this.last_event, 15+fontShift, 42+40);




    ctx.fillStyle = "#fff";
    ctx.fillRect(10+shift, 310+shift, 1400, 200);

    ctx.fillStyle = "#000";
    ctx.font = 'normal 400 2em sofia';//Arial roboto sofia
    ctx.fillText("Hello world "+(window.devicePixelRatio*100)+"% "+this.last_event, 15, 42+300+10);//+fontShift



    ctx.restore(); 
   }  

