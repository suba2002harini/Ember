import { module, test } from 'qunit';
import { setupTest } from 'sales/tests/helpers';

module('Unit | Route | rental', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:rental');
    assert.ok(route);
  });
});
