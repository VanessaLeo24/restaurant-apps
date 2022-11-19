const assert = require('assert');

Feature('Unliking Restos');

Before(({I}) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked menu resto', ({I}) => {
    I.dontSeeElement('.card-item');
});

Scenario('unliking one resto', async ({I}) => {
    I.dontSeeElement('.card-item');
    I.amOnPage('/');
    I.waitForElement('.card-item');
    I.seeElement('.resto_name a');

    const firstResto = locate('.resto_name a').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.card-item');


  const unlikedRestosName =  await I.grabTextFrom('.resto_name');

  assert.strictEqual(firstRestoName, unlikedRestosName);

});