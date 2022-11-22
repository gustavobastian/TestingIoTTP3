# language: es
# encoding: utf-8

Característica: Gestionar la lista

Escenario: Agregar un elemento a una lista vacía
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Y busco el valor asociado a la clave "clave"
    Entonces  La respuesta es valor
    Entonces la lista tiene 1 elemento(s) almacenado(s)
    

Escenario: Agregar dos elemento a una lista vacía
    Dada una lista vacía
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor"}
    Y se agrega la pareja  {"clave":"clave2","valor":"valor2"}
    Y busco el valor asociado a la clave "clave2"
    Entonces  La respuesta es valor2
    Entonces la lista tiene 2 elemento(s) almacenado(s)

Escenario: Agregar elemento con un campo vacío no debe incorporar el elemento
    Dada una lista con 3 elementos
    Cuando se agrega la pareja  {"clave":"clave3","valor": null}
    Y se agrega la pareja  {"clave":null,"valor": "valor4"}
    Entonces la lista tiene 3 elemento(s) almacenado(s)


Escenario: Agregar elemento con clave repetida a una lista 
    Dada una lista con 3 elementos
    Cuando se agrega la pareja  {"clave":"clave","valor":"valor3"}
    Y busco el valor asociado a la clave "clave"
    Entonces  La respuesta es valor
    Entonces la lista tiene 3 elemento(s) almacenado(s)

Escenario: Eliminar un elemento que existe
    Dada una lista con 3 elementos
    Cuando se elimina la clave {"clave"}
    Y busco el valor asociado a la clave {"clave"} 
    Entonces operacion retorna hecho
    Entonces  La respuesta es null
    Entonces la lista tiene 2 elemento(s) almacenado(s)
    
Escenario: Eliminar un elemento que no existe    
    Dada una lista con 3 elementos    
    Y se elimina la clave {"clave10"} 
    Entonces operacion retorna error
    Entonces la lista tiene 3 elemento(s) almacenado(s)

Escenario: actualizo valor de clave
    Dada una lista con 3 elementos
    Y se modifica el elemento {"clave":"clave2","valor":"valor7"}
    Entonces operacion retorna hecho

Escenario: actualizo valor de clave y verifico cambio
    Dada una lista con 3 elementos
    Y se modifica el elemento {"clave":"clave2","valor":"valor7"}
    Y busco el valor asociado a la clave "clave2"    
    Entonces La respuesta es valor7

Escenario: actualizo valor de clave inexistente
    Dada una lista con 3 elementos    
    Y se modifica el elemento {"clave":"clave10","valor":"valor10"} 
    Entonces operacion retorna error
    