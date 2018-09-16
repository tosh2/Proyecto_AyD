import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
import { CrearTema } from './CrearTema.po';
import { async } from '@angular/core/testing';
import * as chai from 'chai';
import * as cap from 'chai-as-promised';
import { callbackify } from 'util';

chai.use(cap);

export const expect = chai.expect;
export const assert = chai.assert;
export const should = chai.should();
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
    });
    Given(/^la pagina tenga un campo para el nombre del tema y tenga como valor "([^']*)"$/, (nombre: string) => {
       return home.setnombretema(nombre);
    });
    Given(/^la pagina tenga un campo para la descripcion del tema y tenga como valor "([^']*)"$/, (descripcion: string) => {
        return home.setdescripciontema(descripcion);
    });
    Given(/^la pagina tenga un campo para el tag del tema y tenga como valor "([^']*)"$/, (tag: string) => {
        return home.settagtema(tag);
    });
    When(/^se presione el boton de CrearTema$/, () => {
        return home.getsubmittema().click();
    });
    Then(/^recargue la pagina de crear tema$/, (done: any) => {
        browser.driver.navigate().refresh().then(() => {
            expect(browser.waitForAngular());
            done();
        });
    });


});
