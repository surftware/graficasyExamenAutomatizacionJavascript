function extra()
{
 cont=0;
 
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

