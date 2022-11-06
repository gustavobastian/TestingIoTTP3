const {Giver, When, Then, Given} = require('@cucumber/cucumber')
const expect= require('chai').expect;
const assert= require('chai').assert;
const Lista = require("../../src/lista");

var lista;

Given('una lista vacía',()=>{
    lista=new Lista();    
});


When('se agrega la pareja {}',(word)=>{
    keyvalue=word.split("{")
    keyvalue=keyvalue[1].split("}")
    key=keyvalue[0];
    value=keyvalue[1];
    lista.add(key,value);  

});

Then('la lista tiene {int} elemento\\(s) almacenado\\(s)', function (value) {
      assert.equal(lista.count(),value);
    });