 var mouse_x = 0;
 var mouse_y = 0;
 app.mousemove=function(event){
                  this.last_event = "";
                  if (event.which == 1)      this.last_event = "нажата левая кнопка мыши";
                  else if (event.which == 2) this.last_event = "нажата средняя кнопка мыши";
                  else if (event.which == 3) this.last_event = "нажата правая кнопка мыши";
                  this.last_event += ", двигается("+event.pageX+","+event.pageY+")";
                  mouse_x = event.pageX;
                  mouse_y = event.pageY;
               }

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

    var sh=200;
    for (let i = 0; i < 100; i++) { 

    var shift=i*3;
    ctx.fillStyle = "#080808";
    ctx.fillRect(mouse_x+shift,mouse_y+shift, sh, sh);
    
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#2d566c";
    ctx.beginPath();
    ctx.rect(mouse_x+shift,mouse_y+shift, sh, sh);
    ctx.stroke();





    }

    ctx.restore(); 
   }  

