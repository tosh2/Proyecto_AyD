import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
import { Dashboard } from './dashboard.po';
defineSupportCode(({ When, Given , Then, Before, And}) => {
let home: Dashboard;
    Before(() => {
    });
    Given(/^entre a la aplicacion$/, {timeout: 60 * 1000}, () => {
        home = new Dashboard();
    });
    When(/^en el navegador se carga la pagina principal$/, {timeout: 60 * 1000}, async () => {
        await browser.get('http://localhost:4200');
    });
    Then(/^ver un primer menu que se llame "(.*?)"$/,
        (string: String) => home.getParagraphText()
            .then(h1title => expect(h1title).to.equal(string)));
    Then(/^ver un segundo menu que se llame "(.*?)"$/,
        (string: String) => home.getParagraphText2()
        .then(h1title => expect(h1title).to.equal(string)));
    Then(/^ver un tercer menu que se llame "(.*?)"$/,
        (string: String) => home.getParagraphText3()
        .then(h1title => expect(h1title).to.equal(string)));
    }
);
