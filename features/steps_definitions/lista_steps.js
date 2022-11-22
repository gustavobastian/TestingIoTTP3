const {Giver, When, Then, Given} = require('@cucumber/cucumber')
const expect= require('chai').expect;
const assert= require('chai').assert;
const Lista = require("../../src/lista-corrected.sjs");
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
/*
Then('la lista retorna \\{\\{{string},{string}},\\{{string},{string}},\\{{string},{string}}}', async (string, string2, string3, string4, string5, string6) =>
{
        
  let responseArray=[];
  await responseArray.push({key:string,value:string2});
  await responseArray.push({key:string3,value:string4});
  await responseArray.push({key:string5,value:string6});
  let responseArrayLocal=await lista.list();        
  for( let i=0; i<responseArray.length; i++)
  {
    assert.equal(responseArrayLocal[i].value,responseArray[i].value);
    assert.equal(responseArrayLocal[i].key,responseArray[i].key);
  }     
});

// Busqueda fallida
Then('cuando busco el valor asociado a la clave \\{{string}} no cargado retorna falla', (string)=>
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
When('se modifica la clave \\{{string},{string}}', async function (string, string2) 
{
  let response= await lista.update(string,string2);
  assert.equal(response,true);  
});  

When('se modifica la clave \\{{string},{string}} da error', async function (string, string2) 
{
  let response= await lista.update(string,string2);
  assert.equal(response,false);  
});  
*/
