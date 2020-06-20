
function startGame() {
  new newGame3();

}
function newGame3(){
  myGameArea.start(1);
    background= new component2(window.innerWidth,window.innerHeight,"city.png",0,0,false);
    fuze1=new component(window.innerWidth/8,window.innerHeight/4,"fuze.png",0,-100,false);
    fuze2=new component(window.innerWidth/8,window.innerHeight/4,"fuzeright.png",window.innerWidth,-100,true);
    fuze3=new component(window.innerWidth/8,window.innerHeight/4,"fuze.png",-100,-100,false);
    expsound = new sound("exp.mp3");
    

    bomb1=new component(window.innerWidth/12,window.innerHeight/6,"bomb2.png",100,0,false);
    bomb2=new component(window.innerWidth/12,window.innerHeight/6,"bomb2.png",200,0,false);
    bomb3=new component(window.innerWidth/12,window.innerHeight/6,"bomb2.png",300,0,false);
    bomb4=new component(window.innerWidth/12,window.innerHeight/6,"bomb2.png",400,0,false);
    bomb5=new component(window.innerWidth/12,window.innerHeight/6,"bomb2.png",500,0,false);
    bomb6=new component(window.innerWidth/12,window.innerHeight/6,"bomb2.png",300,0,false);
    
    nuke1=new component(window.innerWidth/8,window.innerHeight/4,"bomb1.png",250,0-100,false);
    nuke2=new component(window.innerWidth/8,window.innerHeight/4,"bomb1.png",300,0-100,false);
    nuke3=new component(window.innerWidth/8,window.innerHeight/4,"bomb1.png",100,0-100,false);

    text1=new componenttext("Damage: %"+background.damage,20,30);
    backbutton= new component(window.innerWidth/8,window.innerHeight/8, "back.png", window.innerWidth-window.innerWidth/8*2-30, 0,false);

    RestartButton=new component(window.innerWidth/4,window.innerHeight/4, "restart.png", window.innerWidth/2-window.innerWidth/8, window.innerHeight/2+30,false); 
    gameOver=new componenttext2("Game Over",window.innerWidth/2.7,window.innerHeight/2);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function(val) {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.canvas.position="absolute";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        if(val==1){
          this.interval = setInterval(updateGameArea, 20);
          window.addEventListener('mousedown', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
            setTimeout(() => {
              myGameArea.x = false;
            myGameArea.y = false;
            }, 50);
            
        })
        }
        else if(val==2){
          this.interval = setInterval(updateGameArea2, 20);
          window.addEventListener('touchstart', function (e) {
            var touchobj = e.changedTouches[0]; 
           startx = parseInt(touchobj.clientX); 
           starty = parseInt(touchobj.clientY);
            myGameArea.x = startx;
            myGameArea.y = starty; 
            }
          )
          window.addEventListener('touchend', function () {
            myGameArea.x = false;
            myGameArea.y = false;
           }
          )
        }
        else if(val==3){
          this.interval = setInterval(updateGameArea3, 20);
          window.addEventListener('touchstart', function (e) {
            var touchobj = e.changedTouches[0]; 
           startx = parseInt(touchobj.clientX); 
           starty = parseInt(touchobj.clientY);
            myGameArea.x = startx;
            myGameArea.y = starty; 
            }
          )
          window.addEventListener('touchend', function () {
            myGameArea.x = false;
            myGameArea.y = false;
           }
          )
         
        }
    }, 
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      } ,
      stop : function() {
        clearInterval(this.interval);
        
    }
}
function component(width, height, picsrc, x, y,isWhat) {
    this.image=new Image();
    this.image.src=picsrc;
    this.width = width;
    this.height = height;
    this.speedX = 1;
    this.speedY = 1;
    this.count=0;
    this.time=0;
    this.isRight=isWhat;
    this.bombed=false;
    this.x = x;
    this.y = y; 
    this.update = function() {
        ctx = myGameArea.context;
        ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height)
        }
        this.clicked = function() {
            var myleft = this.x;
            var myright = this.x + (this.width);
            var mytop = this.y;
            var mybottom = this.y + (this.height);
            var clicked = true;
            if ((mybottom < myGameArea.y) || (mytop > myGameArea.y) || (myright < myGameArea.x) || (myleft > myGameArea.x)) {
                clicked = false;
            }
            return clicked;
        }
        this.crashWith = function(otherobj) {
          var myleft = this.x;
          var myright = this.x + (this.width);
          var mytop = this.y;
          var mybottom = this.y + (this.height);
          var otherleft = otherobj.x;
          var otherright = otherobj.x + (otherobj.width);
          var othertop = otherobj.y;
          var otherbottom = otherobj.y + (otherobj.height);
          var crash = true;
          if ((mybottom < othertop) ||
          (mytop +20> otherbottom) ||
          (myright < otherleft) ||
          (myleft  > otherright)) {
            crash = false;
          }
          return crash;
        }
        
  }
    
    function component2(width, height, picsrc, x, y) {
        this.image=new Image();
        this.image.src=picsrc;
        this.width = width;
        this.height = height;
        this.damage=0;
        this.speedX = 3;
        this.speed=1;
        this.count=0;
        this.mod=Math.floor(window.innerHeight/1.4)% 4;
        this.mod2= Math.floor(-window.innerHeight/2) % 4 ;
        this.x = x;
        this.y = y; 
        
        this.update = function() {
            ctx = myGameArea.context;
            ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height)
    }  
}
function componenttext(text, x, y) {
  
  this.update = function() {
      ctx = myGameArea.context;
      ctx.font = "bold 21px Segoe UI ";
      ctx.fillStyle = "white";
      text="Damage: %"+background.damage+"    Score: "+(background.count);
      this.x=x;
      this.y=y;
      ctx.fillText(text, x, y);
}  
}
function componenttext2(text, x, y) {
  
  this.update = function() {
      ctx = myGameArea.context;
      ctx.font = "bold 40px Segoe UI ";
      ctx.fillStyle = "white";
      this.x=x;
      this.y=y;
      ctx.fillText(text, x, y);
}  
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  document.body.appendChild(this.sound).volume=0.7;
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
function sound2(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  document.body.appendChild(this.sound).volume=0.3;
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
function sound3(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  document.body.appendChild(this.sound).volume=0.3;
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

function updateGameArea() {
  myGameArea.clear();  
  game();
    
  }
  function game(){
    background.update();
    fuzes(fuze1);
    fuzes(fuze2);
    if(background.count>450){
      fuzes(fuze3);
    }
    nukes(nuke1);
    nukes(nuke2);
    if(background.count>350){
      nukes(nuke3);
    }
    boombs(bomb1);
    boombs(bomb2);
    boombs(bomb3);
    boombs(bomb4);
    boombs(bomb5);
    if(background>650){
      boombs(bomb6);
    }
    text1.update();
    GameOver();
    
  }

  function fuzes(obj){
   
    if(obj.clicked() || obj.y>=window.innerHeight/1.4){
      obj.bombed=true;
    }
    if(obj.y==Math.floor(window.innerHeight/1.4)-background.mod){
      background.damage+=30;
  }
    if(obj.bombed){
      obj.image.src="exp.png";
      expsound.play();
      obj.speedX=0;
      obj.speedY=0;
      obj.time+=1;
      if(obj.time==2){
        if(obj.y<window.innerHeight/1.4-2)
        background.count++;
      }
    }
    if(obj.time== 20){
      obj.bombed=false;
      if(obj.isRight){
        obj.image.src="fuzeright.png";
        
        obj.x=window.innerWidth-Math.floor(Math.random() * 10);
      }
      else{
        obj.image.src="fuze.png";
        
        obj.x=Math.floor(Math.random() * 10);
      }
      obj.y=Math.floor(-window.innerHeight/2)-background.mod2;
      if(background.count>=200 ){
        obj.speedX=2;
        obj.speedY=2;
      }
      else{
        obj.speedX=1;
        obj.speedY=1;
      }
      
      
      obj.time=0;
    }
    if(obj.isRight){
      obj.y+=obj.speedY;
      obj.x-=obj.speedX;
    }
    else{
      obj.x+=obj.speedX;
      obj.y+=obj.speedY;
    }
    obj.update();
  }
  function boombs(obj){
    if(obj.clicked() || obj.y>=window.innerHeight/1.4){
      obj.bombed=true;
    }
    if(obj.y==Math.floor(window.innerHeight/1.4)-background.mod){
      background.damage+=20;
  }
    
    if(obj.bombed){
      obj.image.src="exp.png";
      expsound.play();
      obj.speedY=0;
      obj.time+=1;
      if(obj.time==2){
        if(obj.y<window.innerHeight/1.4-2)
        background.count++;
      }
    }
    if(obj.time== 20){
      obj.bombed=false;
      obj.image.src="bomb2.png";

      obj.y=Math.floor(-window.innerHeight/2)-background.mod2;
      
      obj.x=Math.floor(Math.random() * window.innerWidth-100);
      if(obj.x<0){
        obj.x=50;
      }
      if(background.count>=50 && background.count<250 ){
        obj.speedY= 2;
      }
      else if(background.count>=250){
        obj.speedY= 4 ;
      }
      else 
      obj.speedY=1;
      obj.time=0;
    }
    obj.y+=obj.speedY;
    obj.update();

  }

  function nukes(obj){
    if(obj.clicked() || obj.y>=window.innerHeight/1.4){
      obj.bombed=true;
    }
    if(obj.y==Math.floor(window.innerHeight/1.4)-2){
      background.damage+=50;
  }
    
    if(obj.bombed){
      obj.image.src="exp2.png";
      expsound.play();
      obj.speedY=0;
      obj.time+=1;
      if(obj.time==2){
        if(obj.y<window.innerHeight/1.4-2)
        background.count++;
      }
    }
    if(obj.time== 20){
      obj.bombed=false;
      obj.image.src="bomb1.png";
      obj.y=-window.innerHeight;
      obj.x=Math.floor(Math.random() * window.innerWidth-100);
      if(obj.x<0){
        obj.x=50;
      }
      obj.speedY=1;

      obj.time=0;
    }
    obj.y+=obj.speedY;
    obj.update();

  }
 
  function GameOver(){
    if(background.damage>=100){
      background.damage=100;
      bomb1.speedY=0;
      bomb2.speedY=0;
      bomb3.speedY=0;
      bomb4.speedY=0;
      bomb5.speedY=0;
      bomb6.speedY=0;
      fuze1.speedY=0;
      fuze2.speedY=0;
      fuze3.speedY=0;
      fuze1.speedX=0;
      fuze2.speedX=0;
      fuze3.speedX=0;
      nuke1.speedY=0;
      nuke2.speedY=0;
      nuke3.speedY=0;

      bomb1.image.src="exp.png";
      bomb2.image.src="exp.png";
      bomb3.image.src="exp.png";
      bomb4.image.src="exp.png";
      bomb5.image.src="exp.png";
      bomb6.image.src="exp.png";
      fuze1.image.src="exp.png";
      fuze2.image.src="exp.png";
      fuze3.image.src="exp.png";
      fuze1.image.src="exp.png";
      fuze2.image.src="exp.png";
      fuze3.image.src="exp.png";
      nuke1.image.src="exp.png";
      nuke2.image.src="exp.png";
      nuke3.image.src="exp.png";
      gameOver.update();
      backbutton.update();
        if(backbutton.clicked()){
            window.open("index.html","_self");
            myGameArea.stop();
        }
      RestartButton.update();
      if(RestartButton.clicked()){
        myGameArea.stop();
        new startGame();
      }
    }
  }