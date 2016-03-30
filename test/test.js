var assert = require('assert');
describe('Temperature', function() {
  describe('#convertir()', function () {
    it('should convert from Celsius to Kelvin', function () {
      assert.equal(Medida.convertir('-273.15C'), '0 kelvin');
    });
  });
});
