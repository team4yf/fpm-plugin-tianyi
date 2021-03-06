const _ = require('lodash');
const assert = require('assert');
const { postJson } = require('./httpsutil');
const debug = require('debug')('fpm-plugin-tianyi:cmd');

const { cmdBaseUrl } = require('./setting');

const sendCmd = async ( args ) => {
  const { appId, accessToken, deviceId, command } = args;
  try {
    const url = `${ cmdBaseUrl }deviceCommands`;
    const rsp = await postJson({
      url,
      header: {
        app_key: appId,
        Authorization: `Bearer ${ accessToken }`
      },
      data: { deviceId, command }
    });
    const { code, commandId } = rsp;
    assert( code == 201, JSON.stringify(rsp));
    assert( commandId != undefined, JSON.stringify(rsp));
    return rsp;
  } catch (error) {
    debug('%O', error);
    throw error;
  }
};

exports.sendCmd = sendCmd;