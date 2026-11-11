# txokoPay

Una aplicación para sociedades gastronómicas: lleva el día a día del local, desde el mostrador hasta la junta.

> **Estado:** en diseño. Se están definiendo las necesidades y probando prototipos; todavía no hay nada que instalar.

## Qué quiere ser

- **TPV táctil** para el mostrador: botones grandes y pantallas sencillas, pensadas para que cualquier socio la use sin dudar, sea cual sea su edad.
- **Reservas** integradas en la propia TPV: almuerzos, comidas, meriendas y cenas, con calendario por semanas, máquinas (horno, freidora) por turno y días cerrados por eventos.
- **Banca del socio**: un saldo propio en la sociedad (no es un banco real), con ingresos y formas de pago que la junta activa o desactiva: banca, efectivo y datáfono.
- **Panel de la junta**: revisión de reservas y tickets con estados y colores, ingresos y caja, alertas configurables y avisos a los socios.
- **Almacén e inventario**: albaranes por unidades con su IVA, existencias, alertas de poco género, inventarios periódicos y recuento de vidrio.
- **Artículos y menú**: categorías, artículos que salen de otros (un chupito es 1/6 de una botella, un cubata es un chupito más un refresco) y menú de la TPV que se organiza arrastrando.

## Cómo lo estamos pensando

- Sencillo antes que completo.
- Todo en castellano, preparado para más idiomas.
- Nada se borra: se corrige y queda anotado.
- La TPV nunca se bloquea: si algo no cuadra, queda como aviso para revisarlo después.

Iremos contando más a medida que avance.

## Pruébalo

Tres maquetas para tocar, con **datos inventados**. Todo ocurre en tu navegador: no se guarda nada y, al recargar la página, vuelve todo a como estaba. Cambia lo que quieras.

- **[TPV, el mostrador](demo/tpv.html)**: pantalla táctil con los grupos a la izquierda, el ticket a la derecha, reservas y formas de pago. Para entrar pulsa «Entrar con número de socio» y escribe cualquier número de tres o más cifras (por ejemplo `2371`).
- **[Panel de la junta](demo/panel.html)**: reservas y tickets con su revisión, socios y llaves, ingresos y gastos, almacén e inventario, artículos y menú de la TPV, formas de pago, copias de seguridad y auditoría. Para entrar: usuario `admin`, contraseña `admin`.

- **[Móvil, pedir desde el teléfono](demo/movil.html)**: el socio entra con su número y su móvil, recibe un código y apunta lo que toma sin pasar por la barra. Para probarlo: socio `1` y móvil `600 11 22 33`; el código sale en pantalla porque la demo no manda WhatsApp.

Las formas de pago que activas en el panel son las que ofrece la TPV, y los dos comparten los mismos artículos y menú. Para que se vea, abre las dos en pestañas del mismo navegador.

Son un boceto para enseñar cómo va a ser; muchas cosas cambiarán.