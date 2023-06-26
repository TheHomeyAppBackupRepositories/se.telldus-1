'use strict';

const { RFDevice } = require('homey-rfdriver');

module.exports = class extends RFDevice {
  static CAPABILITIES = {
    onoff: ({ value, data }) => ({
      ...data,
      state: !!value,
      group: false,
    }),
  };

  async onAdded() {
    if (this.hasCapability('onoff')) {
      await this.setCapabilityValue('onoff', false);
    }
  }

  /**
   * Match the received command to the socket command
   *
   * @param command
   * @returns {Promise<boolean>}
   */
  async onCommandMatch(command) {
    if(command === undefined || command === null) {
      return false;
    }

    const { address, unit } = await this.getData();
    return address === command.address && unit === command.unit;
  }

  /**
   * Sets the capability when the device is triggered by remote for on off
   *
   * @param onoff
   * @returns {Promise<void>}
   */
  async onCommandFirst({ state }) {
    if(this.hasCapability('onoff')) {
      await this.setCapabilityValue('onoff', state);
    }
  }
};
