# language: es
# encoding: utf-8

Característica: Gestionar la lista

Escenario: Agregar un elemento a una lista vacía
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave","valor"}
    Entonces la lista tiene 1 elemento(s) almacenado(s)
    Y cuando busco el valor asociado a la clave "clave" el resultado es "valor"

Escenario: Agregar dos elemento a una lista vacía
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave","valor"}
    Y se agrega la pareja  {"clave2","valor2"}
    Entonces la lista tiene 2 elemento(s) almacenado(s)







#Característica: Recuperar lista ordenada con las claves