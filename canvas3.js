function startGame3(){
    new newGame();
}
function newGame(){
    myGameArea.start(3);
    background7 = new component2(window.innerWidth,window.innerHeight,"sky.png",0,0);
    background5 = new component2(window.innerWidth,window.innerHeight,"sky.png",0,0);
    background6 = new component2(window.innerWidth,window.innerHeight,"sky.png",window.innerWidth,0);
    
    jet= new component(window.innerWidth/6,window.innerHeight/9,"jet.png",30,30,false);
    expsound = new sound("exp.mp3");
    

    bomb1=new component(window.innerWidth/12,window.innerHeight/10,"bomb3.png",window.innerWidth*1.2,30,false);
    bomb2=new component(window.innerWidth/12,window.innerHeight/10,"bomb3.png",window.innerWidth*1.2,60,false);
    bomb3=new component(window.innerWidth/12,window.innerHeight/10,"bomb3.png",window.innerWidth*1.2,150,false);
    bomb4=new component(window.innerWidth/12,window.innerHeight/10,"bomb3.png",window.innerWidth*1.2,210,false);
    bomb5=new component(window.innerWidth/12,window.innerHeight/10,"bomb3.png",window.innerWidth*1.2,30,false);
    bomb6=new component(window.innerWidth/12,window.innerHeight/10,"bomb3.png",window.innerWidth*1.2,60,false);
    bomb7=new component(window.innerWidth/12,window.innerHeight/10,"bomb3.png",window.innerWidth*1.2,150,false);
    bomb8=new component(window.innerWidth/12,window.innerHeight/10,"bomb3.png",window.innerWidth*1.2,210,false);
    
    upButton= new component(window.innerWidth/3,window.innerHeight/2.2,"upbutton.png",20,20,false);
    downButton=new component(window.innerWidth/3,window.innerHeight/2.2,"downbutton.png",20,window.innerHeight/2,false);
    upButton2= new component(window.innerWidth/3,window.innerHeight/2.2,"upbutton.png",window.innerWidth*1.9/3,20,false);
    downButton2=new component(window.innerWidth/3,window.innerHeight/2.2,"downbutton.png",window.innerWidth*1.9/3,window.innerHeight/2,false);

    text1=new componenttext4("Score: "+background5.count,30,30);
    backbutton= new component(window.innerWidth/8,window.innerHeight/8, "back.png", window.innerWidth-window.innerWidth/8*2-30, 0,false);
    RestartButton=new component(window.innerWidth/4,window.innerHeight/4, "restart.png", window.innerWidth/2-window.innerWidth/8, window.innerHeight/2+30,false); 
    gameOver=new componenttext2("Game Over",window.innerWidth/2.7,window.innerHeight/2);
}
function componenttext4(text, x, y) {
  
    this.update = function() {
        ctx = myGameArea.context;
        ctx.font = "bold 21px Segoe UI ";
        ctx.fillStyle = "white";
        text="Score: "+background5.count;
        this.x=x;
        this.y=y;
        ctx.fillText(text, x, y);
  }  
  }

function updateGameArea3(){
    myGameArea.clear();
    Backgrounds();
    Blocks();
    Movement();
    gameOver3();
    jet.update();
}
function Backgrounds(){
    background6.count+=background6.speed;
    if(background6.count==20){
        background5.count++;
        background6.count=0;
    }
    if(background5.count>=3){
        upButton.image.src="gone.png";
        upButton2.image.src="gone.png";
        downButton.image.src="gone.png";
        downButton2.image.src="gone.png";

    }
    if(jet.image.src=="exp.png"){
        background5.x-=0;
        background5.x-=0;
    }
    else{
        background5.x-=1;
        background5.x-=1;
        background6.x-=1;
        background6.x-=1;
        if(background5.x<=-window.innerWidth){
            background5.x=window.innerWidth;
        }
        if(background6.x<=-window.innerWidth){
            background6.x=window.innerWidth;
        }
    }
    background7.update();
    background5.update();
    background6.update();
    

}

function Blocks(){

    if(background5.count>=0 && background5.count<20){
        bomb1.speedX=5;
    }
    else if(background5.count>=20 && background5.count<40){
        bomb1.speedX=7;
    }
    else if(background5.count>=40 && background5.count<100){
        bomb1.speedX=9;
    }
    else if(background5.count>=100 && background5.count<200){
        bomb1.speedX=12;
    }
    else if(background5.count>=200){
        bomb1.speedX=15;
    }

    bomb1.x-=bomb1.speedX;
    bomb2.x-=bomb1.speedX;
    bomb3.x-=bomb1.speedX;
    bomb4.x-=bomb1.speedX;
    bomb5.x-=bomb1.speedX;
    bomb6.x-=bomb1.speedX;
    bomb7.x-=bomb1.speedX;
    bomb8.x-=bomb1.speedX;
    

    if(bomb1.x<-window.innerWidth/2){
        bomb1.x=window.innerWidth*1.3;
        bomb1.y=Math.floor(Math.random() * window.innerHeight/1.2);
    }
    if(bomb2.x<-window.innerWidth/2){
        bomb2.x=window.innerWidth*1.4;
        bomb2.y=Math.floor(Math.random() * window.innerHeight/1.2);
    }
    if(bomb3.x<-window.innerWidth/2){
        bomb3.x=window.innerWidth*1.5;
        bomb3.y=Math.floor(Math.random() * window.innerHeight/1.2);
    }
    if(bomb4.x<-window.innerWidth/2){
        bomb4.x=window.innerWidth*1;
        bomb4.y=Math.floor(Math.random() * window.innerHeight/1.2);
    }
    if(bomb5.x<-window.innerWidth){
        bomb5.x=window.innerWidth*1.8;
        bomb5.y=Math.floor(Math.random() * window.innerHeight/1.2);
    }
    if(bomb6.x<-window.innerWidth){
        bomb6.x=window.innerWidth*1.2;
        bomb6.y=Math.floor(Math.random() * window.innerHeight/1.2);
    }
    if(bomb7.x<-window.innerWidth){
        bomb7.x=window.innerWidth*1.6;
        bomb7.y=Math.floor(Math.random() * window.innerHeight/1.2);
    }
    if(bomb8.x<-window.innerWidth){
        bomb8.x=window.innerWidth*1.9;
        bomb8.y=Math.floor(Math.random() * window.innerHeight/1.2);
    }
bomb1.update();
bomb2.update();
bomb3.update();
bomb4.update();
bomb5.update();
bomb6.update();
bomb7.update();
bomb8.update();

}

function Movement(){
    
    if(upButton.clicked()){
        jet.y-=4;
        if(jet.y<20){
            jet.y=20;
        }
    }
    else{
        jet.y-=0;
    }

    if(downButton.clicked()){
        jet.y+=4;
        if(jet.y>window.innerHeight/1.2){
            jet.y=window.innerHeight/1.2;
        }
    }
    else{
        jet.y+=0;
    }

    if(upButton2.clicked()){
        jet.y-=4;
        if(jet.y<20){
            jet.y=20;
        }
    }
    else{
        jet.y-=0;
    }

    if(downButton2.clicked()){
        jet.y+=4;
        if(jet.y>window.innerHeight/1.2){
            jet.y=window.innerHeight/1.2;
        }
    }
    else{
        jet.y+=0;
    }
    
    upButton.update();
    downButton.update();
    upButton2.update();
    downButton2.update();
}

function gameOver3(){
    text1.update();
        if(jet.crashWith(bomb1) || jet.crashWith(bomb2) || jet.crashWith(bomb3) || jet.crashWith(bomb4) ||
        jet.crashWith(bomb5) || jet.crashWith(bomb6) || jet.crashWith(bomb7) || jet.crashWith(bomb8) ){
            expsound.play();
            jet.image.src="exp.png";
            jet.x=-400;
            
        }
        if(jet.x==-400){
            background6.speed=0;
            gameOver.update();
        backbutton.update();
        if(backbutton.clicked()){
            window.open("index.html","_self");
            myGameArea.stop();
        }
        RestartButton.update();
        if(RestartButton.clicked()){
        myGameArea.stop();
        new startGame3();
        }
        
    }
}

