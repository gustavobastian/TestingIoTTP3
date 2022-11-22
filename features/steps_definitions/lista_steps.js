const {Giver, When, Then, Given} = require('@cucumber/cucumber')
const expect= require('chai').expect;
const assert= require('chai').assert;
const Lista = require("../../src/lista.js");
var lista;

Given('una lista vacía',()=>
{
    lista=new Lista();    
});


When('se agrega la pareja {}',(word)=>
{     
  data = JSON.parse(word);   
  lista.add(data.clave,data.valor);  
});

Then('cuando busco el valor asociado a la clave {} el resultado es {}',(clave,respuesta)=>
{       
  data=clave.split("\"")  
  assert.equal(lista.find(data[1]),respuesta);
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

// Busqueda fallida
Then('cuando busco el valor asociado a la clave {} no cargado retorna falla', (string)=>
{
   assert.equal(lista.find(string),null);
});

// Eliminación de elementos
When('se elimina la clave \\{{string}}', async function (string) 
{
  let response= await lista.delete(string);
  assert.equal(response,true);            
});

// Eliminación de elementos
When('se elimina la clave \\{{string}} retorna error',async function (string) 
{
  let response= await lista.delete(string);
  assert.equal(response,false);   
});      

//alteración de valores
When('se modifica el elemento {}', async function (word) 
{
  data = JSON.parse(word);   
  let response= await lista.update(data.clave,data.valor);
  assert.equal(response,true);  
});  

When('se trata de modificar el elemento inexistente {} da error', async function (word) 
{
  data = JSON.parse(word);   
  let response= await lista.update(data.clave,data.valor);
  assert.equal(response,false);  
});  

