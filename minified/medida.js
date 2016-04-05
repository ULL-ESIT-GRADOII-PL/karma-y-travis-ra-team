!function(t){"use strict";function n(t,n){if(t&&!n){var e=/([+-]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cfkmi])/i,o=t.match(e);this.valor=o[1],this.tipo=o[2]}else t&&n&&(this.valor=t,this.tipo=n)}function e(t){return t=XRegExp.exec(t,r)}function o(t){if(t=e(t),t.output)var n=u[t.output](parseInt(t.num),t.input),o=n.getValue()+" "+n.getType();return n?o:"This conversion is not supported.. read EXAMPLES below!"}function i(t,n){return"Invalid conversion: unknown how to convert from '"+t+"' to '"+n+"'.. See Examples below!"}const r=XRegExp("(?<num>      [-+]?[0-9]+(.[0-9]+)?[ ]*(?:e[+-]?[ ]*[0-9]+)?)[ ]*    # number       \n(?<input>    [a-z])[ ]*                                           # inputTemp    \n(?<to>       (?:to)?)[ ]*                                           # to           \n(?<output>   [a-z])[ ]*                                           # outputTemp","xi");var u={};u.k=function(t,n){return new Kelvin(t,n)},u.c=function(t,n){return new Celsius(t,n)},u.f=function(t,n){return new Farenheit(t,n)},u.m=function(t,n){return new Meters(t,n)},u.i=function(t,n){return new Inches(t,n)},n.prototype.constructor=n,n.prototype.getValue=function(){return this.valor},n.prototype.getType=function(){return this.tipo},t.Medida=n,t.Medida.convertir=o,t.Medida.invalidConversion=i}(this);