# language: es
# encoding: utf-8

Característica: Busqueda en la lista

Escenario: Busqueda de valores a partir de claves
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"} 
    Y busco el valor asociado a la clave "clave"
    Entonces  La respuesta es valor

Escenario: se presenta error si no existe la clave
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Y busco el valor asociado a la clave "clave2"
    Entonces  La respuesta es null

