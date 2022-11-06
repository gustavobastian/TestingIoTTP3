# language: es
# encoding: utf-8

Característica: Gestionar la lista

Escenario: Busqueda de valores a partir de claves
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave","valor"}
    Entonces la lista tiene 1 elemento(s) almacenado(s)
    Y cuando busco el valor asociado a la clave "clave" el resultado es "valor"