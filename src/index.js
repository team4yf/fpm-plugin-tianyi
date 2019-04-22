const _ = require('lodash');
const pkg = require('../package.json');
const Biz = require('./biz.js');

const debug = require('debug')(pkg.name);

module.exports = {
  bind: (fpm) => {
    const options = _.assign({
        baseUrl: 'https://device.api.ct10649.com:8743'
      },
      fpm.getConfig('tianyi', {
        appId: 'XdbNkfbFSRYPJhs4H2EJ4G12w6Aa',
        secret: 'N5fUGGNl9aJIDapXNVkI3SVIfCYa',
        webhook: 'https://iot.yunplus.io/webhook/tianyi/notify/datachange',
        baseUrl: 'https://device.api.ct10649.com:8743',
      }) 
    )

    const bizModule = Biz(fpm, options);

    const subscribe = async () => {
      try {
        const data = await bizModule.subscribe({ notifyType: 'deviceDataChanged', callbackUrl: options.webhook });
        return data;
      } catch (error) {
        debug('error %O', error)
        return Promise.reject({ message: error.message, });
      }
    }
    fpm.registerAction('BEFORE_SERVER_START', () => {
      fpm.extendModule('tianyi', bizModule);

      // make sure the webhook url has been subscribed!
      bizModule.subscriptions({notifyType: 'deviceDataChanged'})
        .then(data => {
          const { totalCount, subscriptions } = data;
          if(totalCount < 1){
            subscribe();
            return;
          }
          if(undefined === _.find(subscriptions, { callbackUrl: options.webhook })){
            subscribe();
            return;
          }
        })
        .catch(err => {
          debug('ERROR: %O', err);
        })
      //
    })
    return bizModule;
  }
}
