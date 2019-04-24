import SELECTORS from './selectors';

const LoginPage = {
   loginButton: () => browser.$(SELECTORS.loginSubmit),
   emailAddressInput: () => browser.$(SELECTORS.emailAddressTextInput),
   passwordInput: () => browser.$(SELECTORS.passwordTextInput),
   loggedInUsername: () => browser.$(SELECTORS.loggedInName),
   login(username, password) {
       this.emailAddressInput().setValue(username);
       this.passwordInput().setValue(password);
       this.loginButton().click();
       this.loggedInUsername().waitForDisplayed(60000);
   }
};

export default LoginPage;