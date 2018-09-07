import { browser, by, element, until } from 'protractor';

export class Dashboard {

    navigateTo() {

        return browser.get('/');

    }

    getParagraphText() {

        return element(by.css('p.primermenu')).getText();

    }
    getParagraphText2() {

        return element(by.css('p#segundomenu')).getText();

    }
}
