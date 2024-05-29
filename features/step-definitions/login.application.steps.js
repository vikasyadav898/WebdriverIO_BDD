const LoginData=require('../pageobjects/testdata/logintestdata')
const LoginPage=require('../pageobjects/page/login.application.page')
const { Given, When, Then } = require('@wdio/cucumber-framework');
Given(/^User on the login page$/, () => {
	browser.url(LoginData.url)
});

When(/^User enters correct username and password$/, async () => {
    await LoginPage.loginWithCorrectUser(LoginData.username, LoginData.password)
	
});

When(/^Clicks on login button$/, async () => {
    await LoginPage.clickonLoginButton();
	
});
Then(/^User is should navigate to the login page$/,async () => {
    await LoginPage.loginText(LoginData.loginmessage)
	
});


When(/^User enters valid username and invalid inpassword$/,async () => {
	await LoginPage.loginWithCorrectUser(LoginData.username, LoginData.password1)
});


Then(/^User is should not navigate to the login page$/,async () => {
	await LoginPage.isErrorDisplay();
});


When(/^User enters invalid username and valid inpassword$/,async () => {

    await LoginPage.loginWithCorrectUser(LoginData.username1, LoginData.password)
	
});


