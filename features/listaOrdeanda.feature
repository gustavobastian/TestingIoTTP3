# language: es
# encoding: utf-8

Característica: Recuperar lista ordenada con las claves


Escenario: Agregar tres elementos a una lista vacía se retorna ordenada
    Dada una lista vacía
    Cuando se agrega la pareja  {"123","1"}
    Y se agrega la pareja  {"321","2"}
    Y se agrega la pareja  {"221","3"}
    Entonces la lista retorna {{"123","1"},{"321","2"},{"221","3"}}



Escenario: Agregar tres elementos a una lista vacía se retorna ordenada bis
    Dada una lista vacía
    Cuando se agrega la pareja  {"123","3"}
    Y se agrega la pareja  {"321","1"}
    Y se agrega la pareja  {"221","2"}
    Entonces la lista retorna {{"321","1"},{"221","2"},{"123","3"}}

Escenario: Agregar tres elementos a una lista vacía se retorna ordenada tris
    Dada una lista vacía
    Cuando se agrega la pareja  {"123","1"}
    Y se agrega la pareja  {"221","3"}
    Y se agrega la pareja  {"321","2"}
    Entonces la lista retorna {{"123","1"},{"321","2"},{"221","3"}}