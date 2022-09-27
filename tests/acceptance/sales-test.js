import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'sales/tests/helpers';

module('Acceptance | sales', function (hooks) {
  setupApplicationTest(hooks);
  test('visiting /', async function (assert) {
    await visit('/');
    assert.strictEqual(currentURL(), '/');
    assert.dom('h2').hasText('Welcome to Super Rentals!');
    assert.dom('img').exists();
  });
});
