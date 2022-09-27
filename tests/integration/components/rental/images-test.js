import { module, test } from 'qunit';
import { setupRenderingTest } from 'sales/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental/images', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    await render(hbs`
        <Rental::Images
          src="assets/images/house.jpg"
          alt="A picture of Grand Old Mansion"
        />
    `);
    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', 'assets/images/house.jpg')
      .hasAttribute('alt', 'A picture of Grand Old Mansion');
  });
});
