user_input = ""
lista = []
while user_input.lower() != "ya":
    if user_input:
        lista.append(user_input)
    user_input = input("Escribe algo, si quiers salir pon ya: ")
for x in lista:
    print(x)
"""
componets = ["mouse", "teclado", "monitor", "cpu", "impresora", "parlante", "microfono"]
print("Ingrese el componente que desea buscar: ")
busqueda = input()
valor = True
for x in componets:
    if x == busqueda:
        valor = False
        print("Si existe")
        break
    elif x != busqueda:
        valor = True
if valor == True:
    print("No existe")


salir = True
while salir:
    print("\n1) Sumar")
    print("2) Restar")
    print("3) Multiplicar")
    print("4) Dividir")
    print("5) Mayor Edad")
    print("6) Saber si son iguales")
    print("7) Salir")
    opcion = input("-->")
    if int(opcion) == 1:
        var = input("Ingrse el primer número: ")
        var2 = input("Ingrse el segundo número: ")
        print("La suma es: ", int(var) + int(var2))
    elif int(opcion) == 2:
        var = int(input("Ingrse el primer número: "))
        var2 = int(input("Ingrse el segundo número: "))
        print("La resta es: ", var - var2)
    elif int(opcion) == 3:
        var = int(input("Ingrse el primer número: "))
        var2 = int(input("Ingrse el segundo número: "))
        print("La multiplicación es: ", var * var2)
    elif int(opcion) == 4:
        var = int(input("Ingrse el primer número: "))
        var2 = int(input("Ingrse el segundo número: "))
        print("La división es: ", var / var2)
    elif int(opcion) == 5:
        opcion = input("Ingrese una edad: ")
        if int(opcion) < 0:
            print("No es edad")
        elif int(opcion) < 18:
            print("Menor de edad")
        elif int(opcion) >= 18 and int(opcion) <= 65:
            print("Mayor de edad")
        elif int(opcion) >= 65:
            print("Adulto Mayor")
        else:
            print("No es un número")
    elif int(opcion) == 6:
        var = int(input("Ingrse el primer número: "))
        var2 = int(input("Ingrse el segundo número: "))
        if var == var2:
            print("Son iguales")
        else:
            print("No son iguales")
    elif int(opcion) == 7:
        print("Hasta luego")
        salir = False
    else:
        print("No es un número")

opcion = input("Ingrese una edad: ")
if int(opcion) < 0:
    print("no es edad")
elif int(opcion) < 18:
    print("Ilegal")
elif int(opcion) >= 18 and int(opcion) <= 65:
    print("Legal")
elif int(opcion) >= 65:
    print("Mayor de edad")
else:
    print("No es un número")

variable = "Aarón Blacio"
print(variable[0:5])
print(variable.find("ó"))

var = int(input("Ingrse un número: "))
var2 = int(input("Ingrse otro número: "))
print("La suma es: ", var + var2)
print("La resta es: ", var - var2)
print("La multiplicacion es: ", var * var2)
print("La potenciacion es: ", var**var2)
print("La división es: ", var / var2)
print("El cociente entero es: ", var // var2)
print("El residuo es: ", var % var2)"""
