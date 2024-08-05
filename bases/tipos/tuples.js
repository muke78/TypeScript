"use strict";
(() => {
    /**
     * Tupla en typeScript al poner dentro del la asignacion
     * del tipado del arreglo se crea este tipo
     * `const hero: [string, number]`
     *
     */
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    const heros = ['Dr Strange', 100];
    /**
     * Arreglo comun y corriente con este tipo
     * `const heros: (string | number)[]`
     */
})();
