import { browser, by, element } from 'protractor';
var Dashboard = /** @class */ (function () {
    function Dashboard() {
    }
    Dashboard.prototype.navigateTo = function () {
        return browser.get('/');
    };
    Dashboard.prototype.getParagraphText = function () {
        return element(by.css('p.primermenu')).getText();
    };
    Dashboard.prototype.getParagraphText2 = function () {
        return element(by.css('p#segundomenu')).getText();
    };
    Dashboard.prototype.getParagraphText3 = function () {
        return element(by.css('p#tercermenu')).getText();
    };
    return Dashboard;
}());
export { Dashboard };
//# sourceMappingURL=dashboard.po.js.map