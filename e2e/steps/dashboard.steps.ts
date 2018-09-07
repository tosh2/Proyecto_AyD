import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
import { Dashboard } from './dashboard.po';
defineSupportCode(({ When, Then, Before, And}) => {
let home: Dashboard;
    Before(() => {
        home = new Dashboard();
    });
    When(/^yo cargue la pagina en el navegador$/, async () => {
        await browser.get('http://localhost:4200');
    });
    Then(/^ver un menu que se llame "(.*?)"$/,
        (string: String) => home.getParagraphText()
            .then(h1title => expect(h1title).to.equal(string)));
    }
);
