var expect = chai.expect;

describe('Testing all Constructors of Medida class', function() {
  describe('Celsius: Constructor with 1 argument', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100c');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("c");
    });
  });
  describe('Celsius: Constructor with 2 arguments', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100', 'c');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("c");
    });
  });
  describe('Fahrenheit: Constructor with 1 argument', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100f');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("f");
    });
  });
  describe('Fahrenheit: Constructor with 2 arguments', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100', 'f');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("f");
    });
  });
  describe('Kelvin: Constructor with 1 argument', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100k');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("k");
    });
  });
  describe('Kelvin: Constructor with 2 arguments', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100', 'k');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("k");
    });
  });
  describe('Meters: Constructor with 1 argument', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100m');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("m");
    });
  });
  describe('Meters: Constructor with 2 arguments', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100', 'm');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("m");
    });
  });
  describe('Inches: Constructor with 1 argument', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100i');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("i");
    });
  });
  describe('Inches: Constructor with 2 arguments', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100', 'i');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("i");
    });
  });
});

describe('Testing Temperature Class', function() {
  describe('Convertions are correctly implemented', function () {
    it('Should convert from Celsius to Fahrenheit', function () {
      var convertion = Medida.convertir('50c to f');
      expect(convertion).to.equal('122 Farenheit');
    });
    it('Should convert from Celsius to Kelvin', function () {
      var convertion = Medida.convertir('50c to k');
      expect(convertion).to.equal('323.15 Kelvin');
    });
    it('Converting from Celsius to Celsius should give the source value', function () {
      var convertion = Medida.convertir('100c to c');
      expect(convertion).to.equal('100 Celsius');
    });
    it('Should convert from Fahrenheit to Celsius', function () {
      var convertion = Medida.convertir('50f to c');
      expect(convertion).to.equal('10 Celsius');
    });
    it('Should convert from Fahrenheit to Kelvin', function () {
      var convertion = Medida.convertir('50f to k');
      expect(convertion).to.equal('283.15 Kelvin');
    });
    it('Converting from Fahrenheit to Fahrenheit should give the source value', function () {
      var convertion = Medida.convertir('100f to f');
      expect(convertion).to.equal('100 Farenheit');
    });
    it('Should convert from Kelvin to Celsius', function () {
      var convertion = Medida.convertir('50k to c');
      expect(convertion).to.equal('-223.14999999999998 Celsius');
    });
    it('Should convert from Kelvin to Fahrenheit', function () {
      var convertion = Medida.convertir('50k to f');
      expect(convertion).to.equal('-369.67 Farenheit');
    });
    it('Converting from Kelvin to Kelvin should give the source value', function () {
      var convertion = Medida.convertir('100k to k');
      expect(convertion).to.equal('100 Kelvin');
    });
  });
});

describe('Testing Longitud Class', function() {
  describe('Convertions are correctly implemented', function () {
    it('Should convert from Meters to Inches', function () {
      var convertion = Medida.convertir('100m to i');
      expect(convertion).to.equal('3937.01 Inches');
    });
    it('Converting from Meters to Meters should give the source value', function () {
      var convertion = Medida.convertir('100m to m');
      expect(convertion).to.equal('100 Meters');
    });
    it('Should convert from Inches to Meters', function () {
      var convertion = Medida.convertir('100i to m');
      expect(convertion).to.equal('2.5399986284007405 Meters');
    });
    it('Converting from Inches to Inches should give the source value', function () {
      var convertion = Medida.convertir('100i to i');
      expect(convertion).to.equal('100 Inches');
    });
  });
});

  describe('Testing Invalid Conversions', function() {
    describe('Celsius to X invalid conversions', function () {
      it('Should say error from Celsius to Meters', function () {
        var convertion = Medida.convertir('100c to m');
        expect(convertion).to.equal('Invalid conversion: unknown how to convert from \'c\' to \'Meters\'... See Examples below! Meters');
      });
      it('Should say error from Celsius to Inches', function () {
        var convertion = Medida.convertir('100c to i');
        expect(convertion).to.equal('Invalid conversion: unknown how to convert from \'c\' to \'Inches\'... See Examples below! Inches');
      });
      it('Should say error from Fahrenheit to Meters', function () {
        var convertion = Medida.convertir('100f to m');
        expect(convertion).to.equal('Invalid conversion: unknown how to convert from \'f\' to \'Meters\'... See Examples below! Meters');
      });
      it('Should say error from Fahrenheit to Inches', function () {
        var convertion = Medida.convertir('100f to i');
        expect(convertion).to.equal('Invalid conversion: unknown how to convert from \'f\' to \'Inches\'... See Examples below! Inches');
      });
      it('Should say error from Kelvin to Meters', function () {
        var convertion = Medida.convertir('100k to m');
        expect(convertion).to.equal('Invalid conversion: unknown how to convert from \'k\' to \'Meters\'... See Examples below! Meters');
      });
      it('Should say error from Kelvin to Inches', function () {
        var convertion = Medida.convertir('100k to i');
        expect(convertion).to.equal('Invalid conversion: unknown how to convert from \'k\' to \'Inches\'... See Examples below! Inches');
      });
      it('Should say error from unknown source type', function () {
        var convertion = Medida.convertir('100y to i');
        expect(convertion).to.equal('Invalid conversion: unknown how to convert from \'y\' to \'Inches\'... See Examples below! Inches');
      });
    });
});
