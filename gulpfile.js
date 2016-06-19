var elixir = require('laravel-elixir');

var elixirTypescript = require('elixir-typescript');

elixir.config.sourcemaps = true;

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
    
    mix.copy('node_modules/@angular', 'public/node_modules/@angular');
    mix.copy('node_modules/rxjs', 'public/node_modules/rxjs');
    mix.copy('node_modules/systemjs', 'public/node_modules/systemjs');
    mix.copy('node_modules/zone.js/dist', 'public/node_modules/zone.js/dist');
    mix.copy('node_modules/core-js', 'public/node_modules/core-js');
    
    mix.typescript(
        '/**/*.ts',    // Typescript sources from resources/assets/typescipt
        'public/app'
    );
    
});
