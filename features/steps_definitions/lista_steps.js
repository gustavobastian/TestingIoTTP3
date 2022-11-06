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


Then('la lista tiene {int} elemento\\(s) almacenado\\(s)', (value)=>{
      assert.equal(lista.count(),value);
    });


Then('la lista retorna \\{\\{{string},{string}},\\{{string},{string}},\\{{string},{string}}}', function (string, string2, string3, string4, string5, string6) {
        // Write code here that turns the phrase above into concrete actions
        let responseArray=[];
        responseArray.push({key:string,value:string2})
        responseArray.push({key:string3,value:string4})
        responseArray.push({key:string5,value:string6})

        responseArrayLocal=lista.list()

        for( let i=0; i<responseArray.length; i++)
        {
        //    assert.equal(responseArrayLocal[i],responseArray[i]);
        }
        

        return 'pending';
      });