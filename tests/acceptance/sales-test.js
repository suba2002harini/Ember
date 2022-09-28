import { module, test } from 'qunit';
import { click,visit, currentURL } from '@ember/test-helpers';
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
    assert.equal(currentURL(), '/rentals/grand-old-mansion');
  });

  test('visiting /rentals/grand-old-mansion', async function (assert) {
    await visit('/rentals/grand-old-mansion');

    assert.equal(currentURL(), '/rentals/grand-old-mansion');
    assert.dom('nav').exists();
    assert.dom('.rental.detailed').exists();
  });


});
