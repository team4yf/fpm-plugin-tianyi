const HOST = 'device.api.ct10649.com',  // 180.101.147.89 is the test endpoint
      PORT = 8743;

const URL_PERFIX = `https://${HOST}:${PORT}/iocm/app`;

module.exports = {
  host: HOST,
  port: PORT,
  secBaseUrl: `${URL_PERFIX}/sec/v1.1.0/`,
  cmdBaseUrl: `${URL_PERFIX}/cmd/v1.4.0/`,
  subBaseUrl: `${URL_PERFIX}/sub/v1.2.0/`,
  cmdDeviceUrl: `${URL_PERFIX}/reg/v1.1.0/`,

}