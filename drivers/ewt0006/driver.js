'use strict';

const DriverTransmitter = require('../../lib/DriverTransmitter');

module.exports = class extends DriverTransmitter {
  async onRFInit() {
    await super.onRFInit();

    this.homey.flow
      .getDeviceTriggerCard('ewt0006:received')
      .registerRunListener(async (args, state) => {
        //If the group button is pressed, set the unit t 'g' as defined in the flow
        const unit = state.group ? 'g' : state.unit;

        return (args.state === '1') === state.state
          && args.unit === unit;
      });
  }
};
