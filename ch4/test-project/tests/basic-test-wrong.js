const { Selector } = require('testcafe');

fixture('My first set of tests')
    .page('http://demo.redmine.org/');

test('My first test', async (t) => {
    await t.click('.login-wrong');
});
