const { init, Func } = require("fpmc-jssdk");
const assert = require('assert');
init({ appkey:'123123', masterKey:'123123', endpoint: 'http://localhost:9999/api' });

describe('Function', function(){
  beforeEach(done => {
    done()
  })


  afterEach(done => {
    done()
  })

  it('Function A', async () => {
    try {
      const data = await new Func('tianyi.subscriptions').invoke({});
      console.log(data);
      assert.strictEqual(data == undefined, false, 'should not be undefined');
    } catch (error) {
      throw error;
    }
  });

  it('Function send', async () => {
    try {
      const data = await new Func('tianyi.send').invoke({
        deviceId: '141c0c85-24ca-4d2d-bf57-7e45591a3b88',
        command: { "serviceId": "Cmd", "method": "Set_Cmd", "paras": {"EXTRA":2,"LENGTH":8,"FN":3,"DATA_1": -66052,"DATA_2":4} } 
      });
      console.log(data);
      assert.strictEqual(data == undefined, false, 'should not be undefined');
    } catch (error) {
      throw error;
    }
  });
})
