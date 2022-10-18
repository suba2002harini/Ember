import { module, test } from 'qunit';
import { setupRenderingTest } from 'sales/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | recieved-message', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RecievedMessage />`);

    assert
      .dom('p')
      .hasText(
        'Hey Zoey, have you had a chance to look at the EmberConf brainstorming doc I sent you?'
      );
  });
});
