const {Giver, When, Then, Given} = require('@cucumber/cucumber')
const expect= require('chai').expect;
const assert= require('chai').assert;
const Lista = require("../../src/lista");

var lista;

Given('una lista vacía',()=>{
    lista=new Lista();    
});


When('se agrega la pareja {}',(word)=>{
       
    
    let data=word.split(",")
    let data2=data[0].split("\"")
    let data3=data[1].split("\"")
    let key=(data2[1])
    let value=(data3[1])
    
    
    lista.add(key,value);  
});

Then('cuando busco el valor asociado a la clave {} el resultado es {}',(key,response)=>{    
    let data=key.split("\"")
    assert.equal(lista.find(data[1]),response);
});


Then('la lista tiene {int} elemento\\(s) almacenado\\(s)', function (value) {
      assert.equal(lista.count(),value);
    });