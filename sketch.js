// O jogo consiste de 3 perguntas de múltipla escolha, onde o usuário vai ter que responder corretamente para avançar, sendo que se responder incorretamente, terá que reiniciar as questões do começo. 

contador=0
contador1= 0
contador2 = 0
var tempo = 0;
var tempo1 = 0
var tempo2 = 0
var wlk = [];
var chr = [];
var wrgi = [];
var x = 0
var Xresp1 = 100
var Xresp2 = 300
var Xresp3 = 500
var Yresp = 250
var raio = 40
var tela = 1
var largura = 200
var largura1 = 75
var altura = 50
var altura1 = 35
var xMenu = 225
var xMenu1 = 13
var yMenu1 = 155
var yMenu2 = 215
var yMenu3 = 275
var yMenu4 = 455
let img, snd, bkg, wrg, bkg1, ckm,bki,bkc, redx

function preload ( ){
soundFormats('wav')
img = loadImage('Lucas.jpg');  
snd = loadSound('optionpic.wav')
wrg = loadSound('wrong.wav')
bkg = loadImage('background.png')
bkg1 = loadImage('background q1.png')
ckm = loadImage('download.png')  
bki = loadImage('bki.png')
bkc = loadImage('instruction.jpg')
wlk [0] = loadImage('walk1.png')
wlk [1] = loadImage('walk2.png')
chr [0] = loadImage('cheer1.png')
chr [1] = loadImage('cheer2.png')
wrgi [0] = loadImage('fall.png')
wrgi [1] = loadImage('hurt.png')
redx = loadImage('redx.png')




}
 


function setup() {
  createCanvas(640, 500);
}

function draw() {
  background(65)
  
  if (tela == 1){
    tempo++
    background(bkg);
    image(wlk[contador%2], x, 325)
    if(tempo>15){
    contador++
    tempo = 0
    }
   
    x = x + 1
    if(x==630){
    x = 0 
    }
  
    textAlign(CENTER);
    textSize(26)
    textStyle(BOLDITALIC)
    fill(0)
    text("AV2 - Lop 2021.1", 325, 45)
    
    stroke(200)
    fill(20);
    rect(xMenu, yMenu1, largura, altura, 15)
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    stroke(25, 20, 200)
    fill(20);
    rect(xMenu, yMenu1, largura, altura, 15);
      if(mouseIsPressed){
      snd.play()
      tela = 2
    }  
    
 }
    
    fill(240)
    noStroke();
    textStyle(ITALIC)
    text("Iniciar",325, 190);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    fill(25,20,200)
    noStroke()
    text("Iniciar",325, 190);  
    }
    
    stroke(200)
    fill(20);
    rect(xMenu, yMenu2, largura, altura, 15);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    stroke(250, 20, 20)
    fill(20);
    rect(xMenu, yMenu2, largura, altura, 15);
    if(mouseIsPressed){
        tela = 3;     
      snd.play()
      
    }
}
    
    fill(240)
    noStroke();
    text("Instruções", 325, 250);
     if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    fill(250,20,20)
    noStroke()
    text("Instruções",325, 250);  
    }
    
    stroke(200)
    fill(20);
    rect(xMenu, yMenu3, largura, altura, 15);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    stroke(25, 200, 20)
    fill(20);
    rect(xMenu, yMenu3, largura, altura, 15);
      if(mouseIsPressed){
      snd.play()
      tela = 4
    }  
 }
    
    fill(240);
    noStroke();
    text("Créditos", 325, 310);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    fill(25,200,20)
    noStroke()
    text("Créditos",325, 310);  
    }
   
  } // Tela do Menu
  else if (tela == 2){
    background(bkg1)
    
     noStroke()
  fill(25)
  textSize(25)
  text("Questão n° 1: Qual desses números\n é considerado um numero par e um número primo\n ao mesmo tempo?", 305, 50)
  
  textSize(55)
  fill(25)
  stroke(200)
  ellipse(Xresp1, Yresp, 2*raio,2*raio)
  fill(240)
  if (dist( Xresp1, Yresp, mouseX, mouseY) < raio){
    noFill();
    stroke(205, 200, 20)
    ellipse(Xresp1, Yresp, 2*raio, 2*raio)
      if(mouseIsPressed){
      wrg.play()
      tela = 10
    }  
  }
  fill(240)
  noStroke()
  text("3", 95, 270)
  if (dist( Xresp1, Yresp, mouseX, mouseY) < raio){
    fill(205,200,20);
    noStroke()
      text("3", 95, 270)
       
  }
  
  fill(25)
  stroke(200)
  ellipse(Xresp2, Yresp, 2*raio,2*raio)
  fill(240)
  if (dist( Xresp2, Yresp, mouseX, mouseY) < raio){
    noFill();
    stroke(205, 200, 20)
    ellipse(Xresp2, Yresp, 2*raio, 2*raio)
      if(mouseIsPressed){
      snd.play()
      tela = 5
    }  
  }
  fill(240)
  noStroke()
  text("2", 295, 270)
  if (dist( Xresp2, Yresp, mouseX, mouseY) < raio){
    fill(205,200,20);
    noStroke()
      text("2", 295, 270)
      
  }
  
  
 fill(25)
  stroke(200)
  ellipse(Xresp3, Yresp, 2*raio,2*raio)
  fill(240)
  if (dist( Xresp3, Yresp, mouseX, mouseY) < raio){
    noFill();
    stroke(205, 200, 20)
    ellipse(Xresp3, Yresp, 2*raio, 2*raio)
      if(mouseIsPressed){
      wrg.play()
      tela = 10
      
    }  
  }
  fill(240)
  noStroke()
  text("4", 495, 270)
  if (dist( Xresp3, Yresp, mouseX, mouseY) < raio){
    fill(205,200,20);
    noStroke()
      text("4", 495, 270)
       
  }
  
  
    stroke(200);
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    stroke(200, 20, 200)
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
      if(mouseIsPressed){
      tela = 1
      snd.play() 
    }  
 }
    fill(240);
    noStroke( );
    textStyle(ITALIC)
    textSize(20)
    text("Voltar", 50, 480);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    fill(200,20,200)
    noStroke()   
    text("Voltar",50, 480);  
    }

  } //Jogo Ativo
  else if (tela == 3){
    background(bki)
    fill(25)
    textSize(20)
    textStyle(NORMAL)
    noStroke( )
    textAlign(LEFT)
    text("Esse jogo foi designado pra avaliar o entendimento do jogo sobre\n assuntos básicos de matemática. O jogador deve responder a três\n questões, sendo que se responder incorretamente, deverá\n recomeçar desde a primeira questão. Estas questões foram\n escolhidas de um seleto grupo de questões designadas para\n estudantes do 5° e 6° ano", 10, 180);
        stroke(200);
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    stroke(200, 20, 200)
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
      if(mouseIsPressed){
      snd.play()
      tela = 1
    }  
 }
    fill(240);
    noStroke( );
    textStyle(ITALIC)
    textSize(20)
    text("Voltar", 25, 480);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    fill(200,20,200)
    noStroke()   
    text("Voltar",25, 480);  
    }
    
  } //Instruções
  else if (tela == 4){
    background(bkc)
    fill(275)
    textSize(25)
    textStyle(BOLD)
    noStroke()
    textAlign(CENTER)
    text("Créditos", 325, 50)

    
    image(img, 50, 80  )
    textSize(20)
    textStyle(NORMAL)
    text("Lucas Cesar - Programador", 175, 420)
    
    stroke(200);
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    stroke(200, 20, 200)
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
      if(mouseIsPressed){
      snd.play()  
      tela = 1
    }  
 }
    fill(240);
    noStroke( );
    textStyle(ITALIC)
    textSize(20)
    text("Voltar", 50, 480);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    fill(200,20,200)
    noStroke()   
    text("Voltar",50, 480);  
    }  
  } //Créditos
  else if (tela == 5){
    tempo1++
    background(bkg1)
    fill(65) 
    stroke(65)
     image(chr[contador1%2], 290, 350)
    if(tempo1>15){
    contador1++
    tempo1 = 0
    }
    image(ckm, 220,100,170,170)
    textSize(50)
    text("Correto!", 300, 90)
    
    stroke(200)
    fill(20);
    rect(xMenu, yMenu3, largura, altura, 15);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    stroke(25, 200, 20)
    fill(20);
    rect(xMenu, yMenu3, largura, altura, 15);
      if(mouseIsPressed){
      snd.play()
      tela = 6
    }  
 }
    
    fill(240);
    noStroke();
    textSize(30)
    text("Avançar", 325, 310);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    fill(25,200,20)
    noStroke()
    text("Avançar",325, 310);  
    }
    
    stroke(200);
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    stroke(200, 20, 200)
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
      if(mouseIsPressed){
      tela = 1
      snd.play() 
    }  
 }
    fill(240);
    noStroke( );
    textStyle(ITALIC)
    textSize(20)
    text("Voltar", 50, 480);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    fill(200,20,200)
    noStroke()   
    text("Voltar",50, 480);  
    }
  } // Resposta Correta Fase 1
  else if(tela == 6){
     background(bkg1)
    
     noStroke()
  fill(25)
  textSize(25)
  text("Questão n° 2: Ao resolver uma equação, qual dessas\n operações deve ser resolvida primeiro? ", 305, 50)
  
  textSize(55)
  fill(25)
  stroke(200)
  ellipse(Xresp1, Yresp, 2*raio,2*raio)
  fill(240)
  if (dist( Xresp1, Yresp, mouseX, mouseY) < raio){
    noFill();
    stroke(205, 200, 20)
    ellipse(Xresp1, Yresp, 2*raio, 2*raio)
      if(mouseIsPressed){
      snd.play()
      tela = 7
      
    }  
  }
  fill(240)
  noStroke()
  text("x", 95, 270)
  if (dist( Xresp1, Yresp, mouseX, mouseY) < raio){
    fill(205,200,20);
    noStroke()
      text("x", 95, 270)
       
  }
  
  fill(25)
  stroke(200)
  ellipse(Xresp2, Yresp, 2*raio,2*raio)
  fill(240)
  if (dist( Xresp2, Yresp, mouseX, mouseY) < raio){
    noFill();
    stroke(205, 200, 20)
    ellipse(Xresp2, Yresp, 2*raio, 2*raio)
      if(mouseIsPressed){
      wrg.play()
      tela = 10
              
    }  
  }
  fill(240)
  noStroke()
  text("-", 295, 270)
  if (dist( Xresp2, Yresp, mouseX, mouseY) < raio){
    fill(205,200,20);
    noStroke()
      text("-", 295, 270)
      
  }
  
  
 fill(25)
  stroke(200)
  ellipse(Xresp3, Yresp, 2*raio,2*raio)
  fill(240)
  if (dist( Xresp3, Yresp, mouseX, mouseY) < raio){
    noFill();
    stroke(205, 200, 20)
    ellipse(Xresp3, Yresp, 2*raio, 2*raio)
      if(mouseIsPressed){
      wrg.play()
      tela = 10
      
    }  
  }
  fill(240)
  noStroke()
  text("+", 495, 270)
  if (dist( Xresp3, Yresp, mouseX, mouseY) < raio){
    fill(205,200,20);
    noStroke()
      text("+", 495, 270)
       
  }
  
  
    stroke(200);
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    stroke(200, 20, 200)
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
      if(mouseIsPressed){
      tela = 1
      snd.play() 
    }  
 }
    fill(240);
    noStroke( );
    textStyle(ITALIC)
    textSize(20)
    text("Voltar", 50, 480);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    fill(200,20,200)
    noStroke()   
    text("Voltar",50, 480);  
    }
  } //Questão 2
  else if(tela==7){
      tempo1++
    background(bkg1)
    fill(65) 
    stroke(65)
     image(chr[contador1%2], 290, 350)
    if(tempo1>15){
    contador1++
    tempo1 = 0
    }
    image(ckm, 220,100,170,170)
    textSize(50)
    text("Correto!", 300, 90)
    
    stroke(200)
    fill(20);
    rect(xMenu, yMenu3, largura, altura, 15);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    stroke(25, 200, 20)
    fill(20);
    rect(xMenu, yMenu3, largura, altura, 15);
      if(mouseIsPressed){
      snd.play()
      tela = 8
    }  
 }
    
    fill(240);
    noStroke();
    textSize(30)
    text("Avançar", 325, 310);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    fill(25,200,20)
    noStroke()
    text("Avançar",325, 310);  
    }
    
    stroke(200);
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    stroke(200, 20, 200)
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
      if(mouseIsPressed){
      tela = 1
      snd.play() 
    }  
 }
    fill(240);
    noStroke( );
    textStyle(ITALIC)
    textSize(20)
    text("Voltar", 50, 480);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    fill(200,20,200)
    noStroke()   
    text("Voltar",50, 480);  
    }
  } // Resposta Correta Fase 2
  else if(tela==8){
     background(bkg1)
    
     noStroke()
  fill(25)
  textSize(25)
  text("Questão n° 3: Resolva a seguinte equação:\n 2x2+3-1  ", 305, 50)
  
  textSize(55)
  fill(25)
  stroke(200)
  ellipse(Xresp1, Yresp, 2*raio,2*raio)
  fill(240)
  if (dist( Xresp1, Yresp, mouseX, mouseY) < raio){
    noFill();
    stroke(205, 200, 20)
    ellipse(Xresp1, Yresp, 2*raio, 2*raio)
      if(mouseIsPressed){
      snd.play()
      tela = 9
    
      
    }  
  }
  fill(240)
  noStroke()
  text("6", 95, 270)
  if (dist( Xresp1, Yresp, mouseX, mouseY) < raio){
    fill(205,200,20);
    noStroke()
      text("6", 95, 270)
       
  }
  
  fill(25)
  stroke(200)
  ellipse(Xresp2, Yresp, 2*raio,2*raio)
  fill(240)
  if (dist( Xresp2, Yresp, mouseX, mouseY) < raio){
    noFill();
    stroke(205, 200, 20)
    ellipse(Xresp2, Yresp, 2*raio, 2*raio)
      if(mouseIsPressed){
      wrg.play()
      tela = 10
              
    }  
  }
  fill(240)
  noStroke()
  text("8", 295, 270)
  if (dist( Xresp2, Yresp, mouseX, mouseY) < raio){
    fill(205,200,20);
    noStroke()
      text("8", 295, 270)
      
  }
  
  
 fill(25)
  stroke(200)
  ellipse(Xresp3, Yresp, 2*raio,2*raio)
  fill(240)
  if (dist( Xresp3, Yresp, mouseX, mouseY) < raio){
    noFill();
    stroke(205, 200, 20)
    ellipse(Xresp3, Yresp, 2*raio, 2*raio)
      if(mouseIsPressed){
      wrg.play()
      tela = 10
      
    }  
  }
  fill(240)
  noStroke()
  text("9", 495, 270)
  if (dist( Xresp3, Yresp, mouseX, mouseY) < raio){
    fill(205,200,20);
    noStroke()
      text("9", 495, 270)
       
  }
  
  
    stroke(200);
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    stroke(200, 20, 200)
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
      if(mouseIsPressed){
      tela = 1
      snd.play() 
    }  
 }
    fill(240);
    noStroke( );
    textStyle(ITALIC)
    textSize(20)
    text("Voltar", 50, 480);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    fill(200,20,200)
    noStroke()   
    text("Voltar",50, 480);  
    }
  } // Questão 3
  else if (tela==9){
       tempo1++
    background(bkg1)
    fill(65) 
    stroke(65)
     image(chr[contador1%2], 290, 350)
    if(tempo1>15){
    contador1++
    tempo1 = 0
    }
    image(ckm, 220,100,170,170)
    textSize(25)
    text("Correto! \n Muito obrigado por jogar!", 300, 40)
        stroke(200)
    fill(20);
    rect(xMenu, yMenu3, largura, altura, 15);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    stroke(25, 200, 20)
    fill(20);
    rect(xMenu, yMenu3, largura, altura, 15);
      if(mouseIsPressed){
      snd.play()
      tela = 4
    }  
 }
    
    fill(240);
    noStroke();
    textSize(30)
    text("Créditos", 325, 310);
    if(mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    fill(25,200,20)
    noStroke()
    text("Créditos",325, 310);  
    }
    
    stroke(200);
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    stroke(200, 20, 200)
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
      if(mouseIsPressed){
      tela = 1
      snd.play() 
    }  
 }
    fill(240);
    noStroke( );
    textStyle(ITALIC)
    textSize(20)
    text("Voltar", 50, 480);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    fill(200,20,200)
    noStroke()   
    text("Voltar",50, 480);  
    }
  } // Resposta Correta Final
  else if (tela==10){
      tempo2++
    background(bkg1)
    fill(65) 
    stroke(65)
     image(wrgi[contador2%2], 290, 350)
    if(tempo2>15){
    contador2++
    tempo2 = 0
    }
    image(redx, 220,100,170,170)
    textSize(25)
    text("Resposta Errada, tente novamente", 300, 40)
      
    
    stroke(200);
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    stroke(200, 20, 200)
    fill(20);
    rect(xMenu1, yMenu4, largura1, altura1, 15);
      if(mouseIsPressed){
      tela = 1
      snd.play() 
    }  
 }
    fill(240);
    noStroke( );
    textStyle(ITALIC)
    textSize(20)
    text("Voltar", 50, 480);
    if(mouseX > xMenu1 && mouseX < xMenu1 + largura1 && mouseY > yMenu4 && mouseY < yMenu4 + altura1){
    fill(200,20,200)
    noStroke()   
    text("Voltar",50, 480);  
    }
  } // Resposta Errada


}