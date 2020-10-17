function respuestas(calif)
{
 alert('R1:Sensor Ultrasonico\n\
        R2:Sensor Capacitivo\n\
        R3:Sensor Final de Carrera\n\
        R4:Sensor Efecto Hall\n\
        R5:Sensor de Nivel\n\n\
        Tu calificación es:'+calif);
}

function vp(n){
alert('Pregunta'+ n +'\nCorrecta!!');
}

function fp(n){

alert('Pregunta'+ n +'\nIncorrecta!!');
}



function valida(){
 
// c=0;
cont=0;
 
 sr1=tema1.p1.value;
 sr2=tema1.p2.value;
 sr3=tema1.p3.value;
 sr4=tema1.p4.value;
 sr5=tema1.p5.value;
  
for(y=1; y<=6 ; y++)
{
 
  if(y===1)
  {
   if(sr1==="4")
    cont=cont+1;
   
  }
   
  
  if(y===2)
  {
   if(sr2==="1")
    cont=cont+1;
   
  }
  
  
  if(y===3)
  {
   if(sr3==="3")
    cont=cont+1;
   
  }
  
  if(y===4)
  {
   if(sr4==="6")
    cont=cont+1;
   
  }
  
  
  if(y===5)
  {
   if(sr5==="2")
    cont=cont+1;
    c=cont*2;
   
  }
      
}

respuestas(c);
}



