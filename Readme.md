# Wakkos SASS framework

### Configuración:

#### settings.scss
Configura primeramente el archivo `lib/settings.scss`.

Pasa a configurar las variables y diferentes opciones de la atmósfera de diseño,
donde podremos configurar colores, fuentes, tamaños, etc...

### Breakpoints
Los breakpoints los he colocado en EM en vez de pixels para que el diseño no se
vea afectado por acciones como el ZOOM. Para más info leer a
[Chris Coyer](http://css-tricks.com/why-ems/) y a [Lyza Gardner](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/) con argumentos al respecto.

```scss
$breakpoints: (
  'small'  : 48em,
  'medium' : 56.25em,
  'large'  : 68.75em,

) !default;
```

### Nomenclatura
La convención de nombre sigue este patrón:
```css
    .bloque{}
    .bloque__elemento{}
    .bloque--modificador{}
```

* '.bloque' representa el primer nivel de una abstracción o componente.
* '.bloque__elemento' representa un descendente de '.bloque' que se ayuda de
'.bloque' como un conjunto.
* '.bloque--modificador' representa un estado diferente de '.bloque'.

Una **analogía** del funcionamiento de las clases BEM sería:
```css
    .persona{}
    .persona--mujer{}
        .persona__mano{}
        .persona__mano--izquierda{}
        .persona__mano--derecha{}
```

Para más info podéis leer mi traducción de la [guía de CSS](https://github.com/Wakkos/CSS-Guidelines) de [Harry Roberts](https://twitter.com/csswizardry)
a la cual me he ajustado en su mayoría para crear este framework.

También tenemos espacio entre secciones para que sea fácil de ubicar al ver el
archivo compilado `style.css`.

### Organización
Los archivos de **SCSS** están todos dentro de la carpeta `scss` y distribuidos
de la siguiente manera:

```
scss
    _partials.scss
    style.scss
    styleguide.scss

    base
        _buttons.scss
        _forms.scss
        _images.scss
        _links.scss
        _tables.scss
        _typography.scss

    components
        _dropmenu.scss
        _grid.scss
        _nav-bar.scss

    layout
        _site.scss
        _textures.scss
        helpers
            _font-size.scss
            _margin.scss
            _padding.scss
            _text-align.scss
        vendors
            _font-awesome.scss
            _prism.scss

    lib
        _debug.scss
        _functions.scss
        _index.scss
        _mixins.scss
        _placeholders.scss
        _reset.scss
        _settings.scss

    styleguide
        _miscellaneous.scss
```

El archivo `contenido.scss` se compila al principio del `style.css` para dar una
guía de donde tenemos nuestros elementos y su nombre, gracias a los comentarios
BEM na búsqueda `cmd/ctrl + f` en nuestro editor que empiece por $NOMBREDESECCION
nos ayudará mucho a encontrar el contenido.

A su vez están todas las secciones separadas unas de las otras para ubicar rápidamente
 cuando echamos un vistazo.

El archivo `_debug.scss` lo usamos para tener una
pequeña guía de la semántica de tu documento html.
