import SELECTORS from './selectors';
import LoginPage from '../login/page';


const SnkrsPage = {
    loginLink: () => browser.$(SELECTORS.loginLink),
    cardLinks: () => browser.$$(SELECTORS.cardLink),

    visitLogin() {
        this.loginLink().click();
        LoginPage.loginButton().waitForDisplayed(60000);
    },

    getShoeNames() {
        let names = this.cardLinks().map(card => card.getAttribute('aria-label'));
        return names;
    },

    visitShoe(shoeName) {
        let cards = this.cardLinks();
        for(let i = 0; i < cards.length; i++) {
            if(cards[i].getAttribute('aria-label').includes(shoeName)) {
                card.click();
                browser.waitUntil()
            }
        }
    }
};

export default SnkrsPage;