import { browser, by, element, until } from 'protractor';

export class Nombredashboard {

    navigateTo() {

        return browser.get('/');

    }

    getParagraphText() {

        return element(by.css('small')).getText();

    }
}
