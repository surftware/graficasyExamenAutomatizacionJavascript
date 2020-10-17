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
 R1=r1.slice(0, -1);

 //pregunta 2
 r2=tema1.p2.value.toLowerCase();
 R2=r2.slice(0, -2);

 //pregunta 3
 r3=tema1.p3.value.toLowerCase();
 R3=r3.slice(0, -1);

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
  if(R1==='potenciómetro' || R1==='potenciometro' )
  {
   c=c+1;
   vp(x);
  }
  else
   fp(x);
  break;

  case 2:
  if(R2==='tacogenerador')
  {
   c=c+1;
   vp(x);
  }
  else
   fp(x);
  break;

  case 3:
  if(R3==='piroelectrico' || R3==='piroeléctrico')
  {
   c=c+1;
   vp(x);
  }
  else
   fp(x);
  break;

  case 4:
  if(R4==='piezoeléctrico' || R4==='piezoelectrico' )
  {
   c=c+1;
   vp(x);
  }
  else
   fp(x);
  break;

  case 5:
  if(R5==='termistor')
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


function extra()
{
 var cont=0;
 
 sr1=form2.s1p1.value;
 sr2=form2.s2p1.value;
 sr3=form2.s3p1.value;
 sr4=form2.s4p1.value;
 sr5=form2.s5p1.value;
 sr6=form2.s6p1.value;
 //alert(sr1+sr6);
 
for(y=1; y<=6 ; y++)
{
 
  if(y===1)
  {
   if(sr1==="3")
    cont=cont+1;
   
  }
   
  
  if(y===2)
  {
   if(sr2==="2")
    cont=cont+1;
   
  }
  
  
  if(y===3)
  {
   if(sr3==="1")
    cont=cont+1;
   
  }
  
  if(y===4)
  {
   if(sr4==="6")
    cont=cont+1;
   
  }
  
  
  if(y===5)
  {
   if(sr5==="4")
    cont=cont+1;
   
  }
  
  
  if(y===6)
  {
   if(sr6==="5")
    cont=cont+1;
   
  }
   
    
  
}
if(cont===6)
  alert("!!Felicidades tienes tu punto extra!!");
else
  alert("Disculpa, debes tener todas correctas para merecer el punto!!\n\
         La respuestas son: \n\n\
         carrera,\n\
         nivel,\n\
         capacitivo,\n\
         hall,\n\
         ultrasonico,\n\
         caudal ");
  
}
