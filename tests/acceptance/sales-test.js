import { module, test } from 'qunit';
import { find, click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'sales/tests/helpers';

module('Acceptance | sales', function (hooks) {
  setupApplicationTest(hooks);
  test('visiting /', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Super Rentals!');
    assert.dom('img').exists();
  });

  test('viewing the details of a rental property', async function (assert) {
    await visit('/');
    assert.dom('.rental').exists({ count: 3 });

    await click('.rental:first-of-type a');
    assert.strictEqual(currentURL(), '/rentals/grand-old-mansion');
  });

  test('visiting /rentals/grand-old-mansion', async function (assert) {
    await visit('/rentals/grand-old-mansion');

    assert.strictEqual(currentURL(), '/rentals/grand-old-mansion');
    assert.dom('nav').exists();
    assert.dom('.rental.detailed').exists();
    assert.dom('.share.button').hasText('Share on Twitter');

    let button = find('.share.button');

    let tweetURL = new URL(button.href);
<<<<<<< HEAD
    assert.strictEqual(tweetURL.host, 'twitter.com');

    assert.strictEqual(
=======
    assert.strictEqual((tweetURL.host, 'twitter.com');

    assert.strictEqual((
>>>>>>> ac6a65ccbbee6a4e7cafdc785b83710fa822c9f7
      tweetURL.searchParams.get('url'),
      `${window.location.origin}/rentals/grand-old-mansion`
    );
  });
});
