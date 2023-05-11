
# Movify

Aplicacón movil para el listado de los paises con su respectiva capital y ciudad, desde la cual puedo navergar a google maps o maps, mostrando la ciudad elejida.




## Tecnologías

**Client:** React Native CLI, axios, useContext

La aplicacion fue construida para su visualización en **IOS**, dada las ventajas que tiene al poder configurar directamente el **splash** desde Xcode.

La implementación esta basada en **useContext**, para el manejo de datos de auth y de información a renderizar, de esta forma se logra un mejor manejo del estado, evitando asi re-renders innecesarios y que cada componente (organismos) pueda manejar su propia lógica.
## Instalación

Instalar movify con yarn, unas vez clonado el proyecto

```bash
  cd movify
  yarn install
```

Para levantar el proyecto

```bash
  yarn ios
```