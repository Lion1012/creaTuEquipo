# creaTuEquipo

Bienvenido a **creaTuEquipo**. Esta aplicación web te permite crear un equipo de Pokémon de forma aleatoria. Puedes generar Pokémon aleatorios para cada uno de los 6 espacios disponibles y limpiar la selección en cualquier momento.

[Deploy](https://lion1012.github.io/creaTuEquipo/)
## Cómo Funciona

- Cada grupo tiene dos botones: "Pokemon random X" para generar un Pokémon aleatorio en la sección correspondiente y "limpiar X" para limpiar la sección y eliminar el Pokémon seleccionado.

- Se utiliza la PokeAPI para obtener datos de Pokémon por número de Pokédex.

- La aplicación evita que se repitan los mismos Pokémon en el equipo.

## Requisitos Previos e instalación

Asegúrate de tener Node.js y npm instalados en tu sistema.

1. Clona este repositorio.

    ``` usando terminal -> dentro de la carpeta donde quieras clonarlo.
    git clone https://github.com/TuUsuario/creaTuEquipo.git
    ```

2. Navega al directorio del proyecto.

    ```bash
    cd creaTuEquipo
    ```

3. Instala las dependencias.

    ```bash
    npm install
    ```

## Uso

1. Abre el archivo `index.html` en tu navegador.

2. Haz clic en los botones "Pokemon random X" para generar Pokémon aleatorios.

3. Haz clic en los botones "limpiar X" para limpiar la sección y eliminar el Pokémon seleccionado.

## Errores Conocidos

- Puede haber problemas de conexión con la PokeAPI ya que tarda un rato en recorrer los 1025 pokemon.


## Autor

[LionDev](https://github.com/Lion1012/creaTuEquipo)

## Agradecimientos

Agradecimientos a la comunidad de desarrolladores de la PokeAPI.
