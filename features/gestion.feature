# language: es
# encoding: utf-8

Característica: Gestionar la lista

Escenario: Agregar un elemento a una lista vacía
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Entonces la lista tiene 1 elemento(s) almacenado(s)
    Y cuando busco el valor asociado a la clave "clave" el resultado es valor

Escenario: Agregar dos elemento a una lista vacía
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Y se agrega la pareja  {"clave":"clave2","valor":"valor2"}
    Entonces la lista tiene 2 elemento(s) almacenado(s)

Escenario: Agregar elemento con un campo vacío no debe incorporar el elemento
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Y se agrega la pareja  {"clave":"clave2","valor":"valor2"}
    Y se agrega la pareja  {"clave":"clave5","valor":"valor5"}
    Y se agrega la pareja  {"clave":"clave3","valor": null}
    Y se agrega la pareja  {"clave":null,"valor": "valor4"}
    Entonces la lista tiene 3 elemento(s) almacenado(s)


Escenario: Agregar elemento con clave repetida a una lista 
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Y se agrega la pareja  {"clave":"clave2","valor":"valor2"}
    Y se agrega la pareja  {"clave":"clave1","valor":"valor1"}
    Y se agrega la pareja  {"clave":"clave","valor":"valor3"}
    Entonces la lista tiene 3 elemento(s) almacenado(s)

Escenario: Eliminar un elemento que existe
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Y se agrega la pareja  {"clave":"clave2","valor":"valor2"}
    Y se agrega la pareja  {"clave":"clave3","valor":"valor3"}
    Y se elimina la clave {"clave"}
    Entonces la lista tiene 2 elemento(s) almacenado(s)
    Y cuando busco el valor asociado a la clave {"clave"} no cargado retorna falla


Escenario: Eliminar un elemento que no existe
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Y se agrega la pareja  {"clave":"clave2","valor":"valor2"}
    Y se agrega la pareja  {"clave":"clave3","valor":"valor3"}
    Y se elimina la clave {"clave10"} retorna error
    Entonces la lista tiene 3 elemento(s) almacenado(s)

Escenario: actualizo valor de clave
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Y se agrega la pareja  {"clave":"clave2","valor":"valor2"}
    Y se agrega la pareja  {"clave":"clave3","valor":"valor3"}
    Y se modifica el elemento {"clave":"clave2","valor":"valor7"}
    Y cuando busco el valor asociado a la clave "clave2" el resultado es valor7

Escenario: actualizo valor de clave inexistente
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Y se agrega la pareja  {"clave":"clave2","valor":"valor2"}
    Y se agrega la pareja  {"clave":"clave3","valor":"valor3"}
    Y se trata de modificar el elemento inexistente {"clave":"clave10","valor":"valor10"} da error
    