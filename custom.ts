
/**
 * Utilisez ce fichier pour définir des fonctions et des blocs personnalisés.
 * En savoir plus à https://makecode.microbit.org/blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Blocs personnalisés
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: décrivez votre fonction ici
     * @param n décrire le paramètre ici, eg: 5
     * @param s décrire le paramètre ici, eg: "Hello"
     * @param e décrire le paramètre ici
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: décrivez votre fonction ici
     * @param value décrire ici la valeur, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
