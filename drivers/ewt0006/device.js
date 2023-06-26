'use strict';

const DeviceTransmitter = require('../../lib/DeviceTransmitter');

module.exports = class extends DeviceTransmitter {
  async onCommandFirst({ state, unit, group }) {
    await this.homey.flow
      .getDeviceTriggerCard('ewt0006:received')
      .trigger(this, {}, { state, unit, group })
      .catch(err => this.log(err));
  }
};
