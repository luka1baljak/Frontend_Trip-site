var cnv;
var korisnici=['Ivan','Pero','Luka','Ghb','Lista','Pista','Eminem','Paks','Rex','Popo'];
var vrijednosti=[12,14,7,2,33,47,5,1,7,19];
var bars = [];
function setup() {
  cnv=createCanvas(windowWidth/2+30,windowHeight/2+30);
  cnv.position(windowWidth/4,windowHeight/4+60);
  for (let i = 0; i < 10; i++) {
    let posX = i;
    let visina = vrijednosti[i];
    let tekst = korisnici[i];
    let col1 = random(0,255);
    let col2 =random(0,150);
    let col3 =random(0,50);
    let b = new Bar(posX, visina, tekst,col1,col2,col3);
    bars.push(b);
  }

  textSize(12);
  textAlign(CENTER, CENTER);
  
}
function windowResized() {
  cnv.position(windowWidth/4,windowHeight/4+40)
  resizeCanvas(windowWidth/2+30,windowHeight/2+30);
}
function draw() {

  background(153, 255, 255);
  for (let i = 0; i < bars.length; i++) {
    bars[i].show();
  }
}
class Bar{
  constructor(posX,visina,tekst,col1,col2,col3){
    this.posX=posX;
    this.visina=visina;
    this.tekst=tekst;
    this.col1=col1;
    this.col2=col2;
    this.col3=col3;
  }
  show(){
    if(windowWidth>800){
    fill(this.col1,this.col2,this.col3,100);
    stroke(255);
    rect((width/10*this.posX+30)-11,height-50,22,-height/100*this.visina);
    stroke(255);
    let temp=((width/10*this.posX+30)+(width/10*(this.posX+1)+30))/2
    line(temp,0,temp,height);
   // if(windowWidth>800){
    fill(0);
    stroke(0);
    text(this.tekst,width/10*this.posX+30,height-40);
  //}
    }else{
    fill(this.col1,this.col2,this.col3,100);
    stroke(255);
    rect((width/10*this.posX+30),height-50,10,-height/100*this.visina);
    stroke(255);
    let temp=((width/10*this.posX+30)+(width/10*(this.posX+1)+30))/2
    line(temp,0,temp,height);

    }
  }
}


