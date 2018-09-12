import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { browser, by, element } from 'protractor';
import { Nombredashboard } from './nombredashboard.po';
defineSupportCode(({ When, Given , Then, Before, And}) => {
let home: Nombredashboard;
    Before(() => {
    });
    Given(/^este logueado en la aplicacion$/, {timeout: 60 * 1000}, () => {
        home = new Nombredashboard();
    });
    When(/^en panel me mostrara la pagina principal$/, {timeout: 60 * 1000}, async () => {
        await browser.get('http://localhost:4200');
    });
    Then(/^ver el nombre de usuario que se llame "(.*?)"$/,
        (string: String) => home.getParagraphText()
            .then(h1title => expect(h1title).to.equal(string)));
        }
);
