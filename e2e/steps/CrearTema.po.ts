import { browser, by, element, until } from 'protractor';

export class CrearTema {

    navigateTo() {

        return browser.get('/CrearTema');

    }
    public setnombretema = function(text: string) {
       return element(by.id('nombre')).sendKeys(text);
    };
    public setdescripciontema = function(text: string) {
        return element(by.id('descripcion')).sendKeys(text);
    };
    public settagtema = function(text: string) {
        return element(by.id('tag')).sendKeys(text);
    };
    public getsubmittema = function() {
        return element(by.id('crear'));
    };
    public gettitulo = function() {
        return element(by.id('titulotema'));
    };
}
