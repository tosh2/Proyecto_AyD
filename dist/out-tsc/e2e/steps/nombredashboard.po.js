import { browser, by, element } from 'protractor';
var Nombredashboard = /** @class */ (function () {
    function Nombredashboard() {
    }
    Nombredashboard.prototype.navigateTo = function () {
        return browser.get('/');
    };
    Nombredashboard.prototype.getParagraphText = function () {
        return element(by.css('small')).getText();
    };
    return Nombredashboard;
}());
export { Nombredashboard };
//# sourceMappingURL=nombredashboard.po.js.map