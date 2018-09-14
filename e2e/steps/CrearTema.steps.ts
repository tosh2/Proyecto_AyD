import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
import { CrearTema } from './CrearTema.po';
import { async } from '@angular/core/testing';
const {defineSupportCode} = require('cucumber');

    defineSupportCode(function(context: any) {
        defineSupportCode(({setDefaultTimeout}) => {
            setDefaultTimeout(11000);
        });
        const Given = context.Given;
        const When = context.When;
        const Then = context.Then;
        const Before = context.Before;
    let home: CrearTema;
    Before(() => {
        home = new CrearTema();
    });
    Given('la aplicacion me dirija a la pagina de crear tema', {timeout: 60 * 1000},  async () => {
        await browser.get('http://localhost:4200/CrearTema');
    When(/^la aplicacion tenga un campo para el nombre del tema y tenga como valor "([^']*)"$/, (nombre: string) => {
       return home.setnombretema(nombre);
    });
});
});
