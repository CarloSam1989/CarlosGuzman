"""nombre = "Bonilla"
situation = " no trajo cable"
print(" el estudiante {} tuvo un problema y {}".format(situation,nombre))"""

# presentar la canitdad N de la serie fibonacci
# saber si un numero es par o impar
# indicar cual es el mayor de 3 numeros

x = 0
y = 1
z = 0

while True:
    n = int(input("Humano por favor ingresa un numero mayor a 1:"))
    if n > 1:
        break
print("1", end=" ")
for i in range(0, n):
    z = x+y
    print(f"{z}", end=" ")
    x = y
    y = z
    print("")

if z % 2 == 0:
    print('El nuemro', z, 'es par')
else:
    print('El numero', z, 'es impar.')

# vamos a poner los numeros en una lista
numeros = []

# le agregamos 3 numeros
i = 0
for u in range(3):
    numero = float(input("Introduce el numero #{}: ".format(i + 1)))
    numeros.append(numero)

    # asumir que el mayor es el primero de la lista

    mayor = numeros[0]
    # recorrer y comprarar
    for numero in numeros:
        if numero > mayor:
            mayor = numero

   # imprimir el resultado
    print("Mayor:", mayor)
