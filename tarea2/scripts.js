function respuestas(calif)
{
 alert('R1:Potenciómetro\n\
        R2:Tacogenerador\n\
        R3:Piroeléctricos\n\
        R4:Piezoeléctrico\n\
        R5:Termistores\n\n\
        Tu calificación es:'+calif);
}

function vp(n){
alert('Pregunta'+ n +'\nCorrecta!!');
}

function fp(n){

alert('Pregunta'+ n +'\nIncorrecta!!');
}



function valida(){
 
 c=0;

 //pregunta 1
 r1=tema1.p1.value.toLowerCase();
 R1=r1.slice(0, -1)

 //pregunta 2
 r2=tema1.p2.value.toLowerCase();
 R2=r2.slice(0, -2)

 //pregunta 3
 r3=tema1.p3.value.toLowerCase();
 R3=r3.slice(0, -1)

 //pregunta 4
 r4=tema1.p4.value.toLowerCase();
 R4=r4.slice(0, -1);

 //pregunta 5
 r5=tema1.p5.value.toLowerCase();
 R5=r5.slice(0, -2);

for(x=1; x<=5 ; x++)
{
 switch(x)
 {
  case 1:
  if(R1=='potenciómetro' || R1=='potenciometro' )
  {
   c=c+1;
   vp(x);
  }
  else
   fp(x);
  break;

  case 2:
  if(R2=='tacogenerador')
  {
   c=c+1;
   vp(x);
  }
  else
   fp(x);
  break;

  case 3:
  if(R3=='piroelectrico' || R3=='piroeléctrico')
  {
   c=c+1;
   vp(x);
  }
  else
   fp(x);
  break;

  case 4:
  if(R4=='piezoeléctrico' || R4=='piezoelectrico' )
  {
   c=c+1;
   vp(x);
  }
  else
   fp(x);
  break;

  case 5:
  if(R5=='termistor')
  {
   c=c+1;
   vp(x);
  }
  else
   fp(x);
  break;

  default:
  break;
  
  
 }
}  
 c=c*2;
 respuestas(c);
}


