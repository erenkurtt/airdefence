function startGame2(){
    new newGame2();
}
function newGame2(){
    myGameArea.start(2);
    background4= new component2(window.innerWidth,window.innerHeight,"desert.png",0,0);
    sun=new component(window.innerWidth/11,window.innerHeight/5.5,"sun.png",window.innerWidth/1.5,20);

    background1= new component2(window.innerWidth,window.innerHeight,"desert.png",0,0);
    background2= new component2(window.innerWidth,window.innerHeight,"desert2.png",window.innerWidth,0);
    background3= new component2(window.innerWidth,window.innerHeight,"desert3.png",window.innerWidth*2,0);
    helisound = new sound("helicop.mp3");
    rocketsound=new sound2("rocket.mp3");
    machinegun=new sound2("machinegun.wav");
    
    
    heli= new component(window.innerWidth/5,window.innerHeight/4,"hel.png",100,30,false);
    friend1= new component(window.innerWidth/6,window.innerHeight/6,"friend1.png",window.innerWidth/6+10-50,window.innerHeight/1.4,false);
    friend2= new component(window.innerWidth/6,window.innerHeight/6,"friend2.png",-50,window.innerHeight/1.4,false);
    
    rocket1 = new componentRoc(window.innerWidth/18,window.innerHeight/9,"gone.png",heli.x+window.innerWidth/12,heli.y+window.innerHeight/10,false);
    bullet1= new componentRoc(window.innerWidth/12,window.innerHeight/6,"gone.png",heli.x+window.innerWidth/8,heli.y+window.innerHeight/5,false);
    bullet2= new componentRoc(window.innerWidth/12,window.innerHeight/6,"gone.png",heli.x+window.innerWidth/8,heli.y+window.innerHeight/5,false);
    rocketbuton= new component(window.innerWidth/10,window.innerHeight/5,"rocketbuton.png",window.innerWidth-window.innerWidth/7,window.innerHeight/2-window.innerHeight/4,false);
    fireButton= new component(window.innerWidth/10,window.innerHeight/5,"minigun.png",window.innerWidth-window.innerWidth/7,window.innerHeight/2,false);

    upButton= new component(window.innerWidth/14,window.innerHeight/7,"upbutton.png",window.innerWidth/16,window.innerHeight/3,false);
    downButton=new component(window.innerWidth/14,window.innerHeight/7,"downbutton.png",window.innerWidth/16,window.innerHeight/3+window.innerHeight/8*2,false);
    rightButton=new component(window.innerWidth/14,window.innerHeight/7,"rightbutton.png",window.innerWidth/16*2-5,window.innerHeight/3+window.innerHeight/8,false);
    leftButton=new component(window.innerWidth/14,window.innerHeight/7,"leftbutton.png",5,window.innerHeight/3+window.innerHeight/8,false);

    pickup1= new component(window.innerWidth/6,window.innerHeight/10,"macpickup.png",Math.floor(window.innerWidth*1.6),window.innerHeight/1.3,false);
    bombtruck= new component(window.innerWidth/6,window.innerHeight/7,"truck.png",Math.floor(window.innerWidth*1.4),window.innerHeight/1.3,false);
    tank= new component(window.innerWidth/6,window.innerHeight/6,"tank.png",window.innerWidth*1.5,window.innerHeight/1.4,false);
    hostileheli =new component(window.innerWidth/5,window.innerHeight/7,"hel2.png",window.innerWidth*1.1,30,false);

    text1=new componenttext3("Elapsed time "+background3.count,30,30);
    backbutton= new component(window.innerWidth/8,window.innerHeight/8, "back.png", window.innerWidth-window.innerWidth/8*2-30, 0,false);
    RestartButton=new component(window.innerWidth/4,window.innerHeight/4, "restart.png", window.innerWidth/2-window.innerWidth/8, window.innerHeight/2+30,false); 
    gameOver=new componenttext2("Game Over",window.innerWidth/2.7,window.innerHeight/2);
}
function componentRoc(width, height, picsrc, x, y,isTriged) {
    this.image=new Image();
    this.image.src=picsrc;
    this.width = width;
    this.height = height;
    this.speedX = 3;
    this.speedY = 3;
    this.count=0;
    this.time=0;
    this.bombed=false;
    this.rockettriged=isTriged;
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
          (mytop > otherbottom) ||
          (myright < otherleft) ||
          (myleft > otherright)) {
            crash = false;
          }
          return crash;
        }
        
  }
  function componenttext3(text, x, y) {
  
    this.update = function() {
        ctx = myGameArea.context;
        ctx.font = "bold 18px Segoe UI ";
        ctx.fillStyle = "black";
        text="Elapsed time: "+background3.count;
        this.x=x;
        this.y=y;
        ctx.fillText(text, x, y);
  }  
  }
 
function updateGameArea2(){
    myGameArea.clear();
    
    level1();
}

function level1(){
    background1.x-=background1.speed;
    background2.x-=background1.speed;
    background3.x-=background1.speed;
    if(background1.x==-window.innerWidth){
        background1.x=window.innerWidth*2
    }
    if(background2.x==-window.innerWidth){
        background2.x=window.innerWidth*2
    }
    if(background3.x==-window.innerWidth){
        background3.x=window.innerWidth*2
    }
    background4.update();
    background1.update();
    background2.update();
    background3.update();
    sun.update();
    
    Buttons();
    
    Bullet(bullet1);
    Bullet(bullet2);
    Rocket(rocket1);
    Targets();
    friends();
    
    heli.update();
}

function Rocket(obj){
   
    if( obj.rockettriged ==false){
        obj.image.src="gone.png";
        obj.y=heli.y+window.innerHeight/10;
        obj.x=heli.x+window.innerWidth/12;
        obj.speedX=0;
        obj.speedY=0;
        obj.time=0;
        
      }
    else{
        obj.image.src="rocket.png";
        rocketsound.volume=0.5;
        rocketsound.play();
        obj.speedX=4;
        obj.speedY=4;
        if(obj.y>=window.innerHeight/1.3){
            obj.bombed=true;
            
            if(obj.bombed && obj.time<10){
                
                obj.image.src="exp.png"
                obj.speedX=-1;
                obj.speedY=0;
                obj.time+=1;
                
              }
              if(obj.time>= 10){
                obj.image.src="gone.png"
                obj.rockettriged=false;
                obj.bombed=false;
                
              }
        }
    }
    
    obj.x+=obj.speedX;
    obj.y+=obj.speedY;
    obj.update();

}
function Bullet(obj){
    if( obj.rockettriged ==false){
        obj.image.src="gone.png";
        obj.y=heli.y+window.innerHeight/5;
        obj.x=heli.x+window.innerWidth/8;
        obj.speedX=0;
        obj.speedY=0;

      }
    else{
        obj.image.src="bullet.png";
        obj.speedX=5;
        obj.speedY=5;
        machinegun.play();
        if(obj.y>=window.innerHeight/1.4){
            obj.bombed=true;
            if(obj.bombed){
                obj.image.src="gone.png"
                obj.speedX=-1;
                obj.speedY=0;
                obj.time+=1;
                
              }
              if(obj.time== 10){
                obj.rockettriged=false;
                obj.bombed=false;
                obj.time=0;
              }
        }
    }
    obj.x+=obj.speedX;
    obj.y+=obj.speedY;
    obj.update();
}

function Buttons(){
    if(rocketbuton.clicked()){
        rocket1.rockettriged=true;
    }
    if(fireButton.clicked()){
        bullet1.rockettriged=true;
        setTimeout(() => {
            bullet2.rockettriged=true;
        }, 300);
        
    }

    if(upButton.clicked()){
        heli.y-=3;
        if(heli.y<20){
            heli.y=20;
        }
    }
    else{
        heli.y-=0;
    }

    if(downButton.clicked()){
        heli.y+=3;
        if(heli.y>window.innerHeight/2.5){
            heli.y=window.innerHeight/2.5;
        }
    }
    else{
        heli.y+=0;
    }

    if(rightButton.clicked()){
        heli.x+=3;
        if(heli.x>window.innerWidth/1.5){
            heli.x=window.innerWidth/1.5;
        }
    }
    else{
        heli.x+=0;
    }

    if(leftButton.clicked()){
        heli.x-=3;
        if(heli.x<20){
            heli.x=20;
        }
    }
    else{
        heli.x-=0;
    }
    fireButton.update();
    rocketbuton.update();
    upButton.update();
    downButton.update();
    rightButton.update();
    leftButton.update();
}
function Targets(){
    if(pickup1.crashWith(rocket1) || pickup1.crashWith(bullet1) ){
        pickup1.speedX=0;
        pickup1.image.src="exp.png";
        if(bullet1.time==7 ){
            background4.count++;
        }
        rocket1.rockettriged=false;
        setTimeout(() => {
            pickup1.count=15;
        }, 300);
    }
    if(pickup1.count==15 || pickup1.x==window.innerWidth+3){
        pickup1.x=window.innerWidth*1;
        pickup1.image.src="macpickup.png";
        if(background4.count<=15){
            pickup1.speedX=2.5;
        }
        else if(background4.count<15 && background4.count<=45){
            pickup1.speedX=3.5;
        }
        else{
            pickup1.speedX=4;
        }
        
        pickup1.count=1;
    }
    pickup1.x-=pickup1.speedX;

    if(bombtruck.crashWith(rocket1) || bombtruck.crashWith(bullet1)){
        bombtruck.speedX=0;
        bombtruck.image.src="exp.png";
        if(bullet1.time==7){
            background4.count++;
        }
        rocket1.rockettriged=false;
        setTimeout(() => {
            bombtruck.count=15;
        }, 300);
    }
    if(bombtruck.count==15 || bombtruck.x==window.innerWidth+3){
        bombtruck.x=window.innerWidth*1;
        bombtruck.image.src="truck.png";
        if(background4.count<=15){
            bombtruck.speedX=2;
        }
        else if(background4.count<15 && background4.count<=45){
            bombtruck.speedX=2.5;
        }
        else{
            bombtruck.speedX=3;
        }
        bombtruck.count=1;
    }
    bombtruck.x-=bombtruck.speedX;

    if(tank.crashWith(rocket1)){
        tank.speedX=0;
        tank.image.src="exp.png";
        rocket1.rockettriged=false;
        setTimeout(() => {
            background4.count++;
            tank.count=15;
            tank.x=window.innerWidth*2;
        }, 300);
    }
    if(tank.count==15 || tank.x==window.innerWidth+3){
        
        tank.image.src="tank.png";
        if(background4.count<=15){
            tank.speedX=0.5;
        }
        else if(background4.count<15 && background4.count<=45){
            tank.speedX=1;
        }
        else{
            tank.speedX=2;
        }
        tank.count=1;
    }
    tank.x-=tank.speedX;

    hostileheli.x-=hostileheli.speedX;
    if(hostileheli.x<-window.innerWidth){
        hostileheli.x=window.innerWidth*2
        hostileheli.y=20+Math.floor(Math.random()*window.innerHeight/3);
    }
    
    pickup1.update();
    tank.update();
    bombtruck.update();
    hostileheli.update();


} 
function friends(){
    
    friend1.x+=0;
    friend2.x+=0;
    
    friend1.update();
    friend2.update();
    background2.count+=background2.speed;
    if(background2.count==30){
        background3.count++;
        background2.count=0;
    }
    text1.update();
    if(friend1.crashWith(pickup1) ){
        friend1.image.src="exp.png";
        friend2.image.src="exp.png";
        pickup1.image.src="exp.png";
        pickup1.x=20;
        bombtruck.x=20;
        pickup1.speedX=0;
        bombtruck.speedX=0;
        tank.speedX=0;
        background2.count+=0;
        background1.speed=0;
        background2.speed=0;
        background3.speed=0;
        gameOver.update();
        backbutton.update();
        if(backbutton.clicked()){
            window.open("index.html","_self");
            myGameArea.stop();
        }
        RestartButton.update();
        if(RestartButton.clicked()){
        myGameArea.stop();
        new startGame2();
      }
    }
    else{
        helisound.play();
    }
    
    if(friend1.crashWith(bombtruck) ){
        friend1.image.src="exp.png";
        friend2.image.src="exp.png";
        bombtruck.image.src="exp.png";
        bombtruck.x=20;
        pickup1.x=20;
        pickup1.speedX=0;
        bombtruck.speedX=0;
        tank.speedX=0;
        background1.speed=0;
        background2.speed=0;
        background2.count+=0;
        background3.speed=0;
        helisound.stop();
        gameOver.update();
        backbutton.update();
        if(backbutton.clicked()){
            window.open("index.html","_self");
            myGameArea.stop();
        }
        RestartButton.update();
        if(RestartButton.clicked()){
        myGameArea.stop();
        new startGame2();
      }
    }
    else{
        helisound.play();
    }
    
    if(friend1.crashWith(tank) ){
        
        bombtruck.image.src="exp.png";
        bombtruck.x=20;
        pickup1.x=20;
        pickup1.speedX=0;
        bombtruck.speedX=0;
        tank.speedX=0;
        background1.speed=0;
        background2.speed=0;
        background2.count+=0;
        background3.speed=0;
        helisound.stop();
        gameOver.update();
        backbutton.update();
        if(backbutton.clicked()){
            window.open("index.html","_self");
            myGameArea.stop();
        }
        RestartButton.update();
        if(RestartButton.clicked()){
        myGameArea.stop();
        new startGame2();
      }
    }
    else{
        helisound.play();
    }
    if(heli.crashWith(hostileheli) ){
        
        heli.image.src="exp.png";
        hostileheli.image.src="exp.png";
        bombtruck.x=20;
        pickup1.x=20;
        pickup1.speedX=0;
        bombtruck.speedX=0;
        hostileheli.speedX=0;
        tank.speedX=0;
        background1.speed=0;
        background2.speed=0;
        background2.count+=0;
        background3.speed=0;
        helisound.stop();
        gameOver.update();
        RestartButton.update();
        backbutton.update();
        if(backbutton.clicked()){
            window.open("index.html","_self");
            myGameArea.stop();
        }
        if(RestartButton.clicked()){
        myGameArea.stop();
        new startGame2();
      }
    }
    else{
        hostileheli.speedX=2;
        helisound.play();
    }
    
   
}

