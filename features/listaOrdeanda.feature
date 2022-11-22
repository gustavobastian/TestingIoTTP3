# language: es
# encoding: utf-8

Característica: Recuperar lista ordenada con las claves


Escenario: Agregar tres elementos a una lista de claves se retorna ordenada
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"Alba","valor":"alba"}
    Y se agrega la pareja  {"clave":"Zafir","valor":"zaa"}
    Y se agrega la pareja  {"clave":"Martina","valor":"3"}
    Entonces la lista retorna [{"Alba"},{"Martina"},{"Zafir"}]



Escenario: Agregar tres elementos a una lista vacía se retorna ordenada (primer elemento al final de la lista)
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"Zafir","valor":"zaa"}
    Y se agrega la pareja  {"clave":"Alba","valor":"alba"}
    Y se agrega la pareja  {"clave":"Martina","valor":"3"}
    Entonces la lista retorna [{"Alba"},{"Martina"},{"Zafir"}]

Escenario: Agregar tres elementos a una lista vacía se retorna ordenada (ultimo elemento al final de la lista)
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"Martina","valor":"3"}
    Y se agrega la pareja  {"clave":"Alba","valor":"alba"}
    Y se agrega la pareja  {"clave":"Zafir","valor":"zaa"}
    Entonces la lista retorna [{"Alba"},{"Martina"},{"Zafir"}]
