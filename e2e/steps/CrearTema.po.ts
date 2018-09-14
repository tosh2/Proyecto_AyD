import { browser, by, element, until } from 'protractor';

export class CrearTema {

    navigateTo() {

        return browser.get('/');

    }

    getNombreTema() {

        return element(by.css('p.primermenu')).getText();

    }
}
