import SnkrsPage from '../pages/nike/snkrs/page';
import { expect } from 'chai';
import LoginPage from '../pages/nike/login/page';
// "clean": "rm -rf complied-test",
describe('test', function() {
    before(function() {
        browser.maximizeWindow();
        browser.url('https://www.nike.com/launch');
    });

    it('test spec', function() {
        // SnkrsPage.visitLogin();
        // LoginPage.login("loganben9812@gmail.com", "Mydellxps15");
        // console.log(SnkrsPage.getShoeNames());
        SnkrsPage.visitShoe('Jordan 4');
        // let figures = browser.$$('figure');
        // figures.forEach(figure => {
        //     console.log(figure.findElementsFromElement());
        // });
        // console.log(browser.$$('figure .card-link').length);
    });
});