import { browser, by, element, until } from 'protractor';

export class CrearTema {

    navigateTo() {

        return browser.get('/CrearTema');

    }
    public setnombretema = function(text: string) {
       return element(by.id('nombre')).sendKeys(text);
    };
}
