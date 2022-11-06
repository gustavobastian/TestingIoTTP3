# language: es
# encoding: utf-8

Característica: Gestionar la lista

Escenario: Agregar un elemento a una lista vacía
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave" , "valor"}
    Entonces la lista tiene 1 elemento(s) almacenado(s)