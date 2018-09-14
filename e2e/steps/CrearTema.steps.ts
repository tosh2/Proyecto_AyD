import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
import { CrearTema } from './CrearTema.po';
defineSupportCode(({ When, Given , Then, Before, And}) => {
let home: CrearTema;
    Before(() => {
    });
    Given(/^la aplicacion me dirija a la pagina de crear tema$/, {timeout: 60 * 1000}, () => {
        home = new CrearTema();
    });
    }
);
