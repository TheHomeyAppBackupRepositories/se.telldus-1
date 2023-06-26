
const { RFDriver } = require('homey-rfdriver');
const TelldusRFSignal = require('./TelldusRFSignal');

module.exports = class extends RFDriver {
  static SIGNAL = TelldusRFSignal;
};
