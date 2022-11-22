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

#Escenario: Agregar elemento con un campo vacío 
#    Dada una lista vacía
#    Cuando se agrega la pareja  {"clave","valor"}
#    Y se agrega la pareja  {"clave2","valor2"}
#    Y se agrega la pareja  {"clave",""}
#    Y se agrega la pareja  {"","valor"}
#    Entonces la lista tiene 2 elemento(s) almacenado(s)


#Escenario: Agregar elemento repetido a una lista 
#    Dada una lista vacía
#    Cuando se agrega la pareja  {"clave","valor"}
#    Y se agrega la pareja  {"clave2","valor2"}
#    Y se agrega la pareja  {"clave","valor"}
#    Entonces la lista tiene 2 elemento(s) almacenado(s)

#Escenario: Eliminar un elemento que existe
#    Dada una lista vacía
#    Cuando se agrega la pareja  {"clave","valor"}
#    Y se agrega la pareja  {"clave2","valor2"}
#    Y se agrega la pareja  {"clave3","valor3"}
#    Y se elimina la clave {"clave"}
#    Entonces la lista tiene 2 elemento(s) almacenado(s)
#    Y cuando busco el valor asociado a la clave {'clave'} no cargado retorna falla


#Escenario: Eliminar un elemento que no existe
#    Dada una lista vacía
#    Cuando se agrega la pareja  {"clave","valor"}
#    Y se agrega la pareja  {"clave2","valor2"}
#    Y se agrega la pareja  {"clave3","valor3"}
#    Y se elimina la clave {"clave10"} retorna error
#    Entonces la lista tiene 3 elemento(s) almacenado(s)

#Escenario: actualizo valor de clave
#    Dada una lista vacía
#    Cuando se agrega la pareja  {"clave","valor"}
#    Y se agrega la pareja  {"clave2","valor2"}
#    Y se agrega la pareja  {"clave3","valor3"}
#    Y se modifica la clave {"clave2","valor7"} 
#    Y cuando busco el valor asociado a la clave "clave2" el resultado es "valor7"

#Escenario: actualizo valor de clave inexistente
#    Dada una lista vacía
#    Cuando se agrega la pareja  {"clave","valor"}
#    Y se agrega la pareja  {"clave2","valor2"}
#    Y se agrega la pareja  {"clave3","valor3"}
#    Y se modifica la clave {"clave10","valor7"} da error
    