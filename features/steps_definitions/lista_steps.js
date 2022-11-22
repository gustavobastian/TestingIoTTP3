const {Giver, When, Then, Given} = require('@cucumber/cucumber')
const expect= require('chai').expect;
const assert= require('chai').assert;
const Lista = require("../../src/lista.js");
var lista;
var respuestaGeneral;
var respuestaOperacion;
Given('una lista vacía',()=>
{
    lista=new Lista();    
});

Given('una lista con 3 elementos',()=>
{
    lista=new Lista();    
    lista.add("clave","valor");  
    lista.add("clave2","valor2");  
    lista.add("clave3","valor3");  
});


When('se modifica el elemento {}', async function (word) 
{
  data = JSON.parse(word);   
  respuestaOperacion= await lista.update(data.clave,data.valor);  
});  


When('se agrega la pareja {}',(word)=>
{     
  data = JSON.parse(word);   
  lista.add(data.clave,data.valor);  
});

When('busco el valor asociado a la clave {}',(clave)=>
{ let data=[];    
  if(clave!=null)
  {
    data=clave.split("\"")  
  }
  else 
  {
    data.push(null)
    data.push(null)
  }
    
  respuestaGeneral= lista.find(data[1]);
});

Then('La respuesta es {}',(pasaje)=>
{ 
  if(pasaje=='null')
  {
    pasaje=null;
  }
  if(respuestaGeneral=='null')
  {
    respuestaGeneral=null;
  }
  assert.equal(pasaje,respuestaGeneral);
});

Then('la lista tiene {int} elemento\\(s) almacenado\\(s)', (value)=>
{
  assert.equal(lista.count(),value);    
});

Then('la lista retorna {}', (word) =>
{
  let word2=word.split("[")
  let word3=word2[1].split("]")
  let data =[];
  data=(word3[0]).split(",");  
  let responseArray=[]
  data.forEach(element => 
  {
    let element2=element.split("\"");
    responseArray.push(element2[1]);      
  });  
  
  let responseArrayLocal=lista.getList();        
  for( let i=0; i<responseArray.length; i++)
  {
    assert.equal(responseArrayLocal[i],responseArray[i]);    
  }     
});

When('se elimina la clave \\{{string}}', function (string) 
{
  respuestaOperacion= lista.delete(string);    
});

Then ('operacion retorna error', function(){
  assert.equal(respuestaOperacion,false);   
})
Then ('operacion retorna hecho', function(){
  assert.equal(respuestaOperacion,true);   
})


