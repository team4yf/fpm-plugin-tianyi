// const BASE_URL = 'https://device.api.ct10649.com:8743';  // 180.101.147.89 is the test endpoint

const URL_PERFIX = `/iocm/app`;

module.exports = {
  secBaseUrl: `${URL_PERFIX}/sec/v1.1.0/`,
  cmdBaseUrl: `${URL_PERFIX}/cmd/v1.4.0/`,
  subBaseUrl: `${URL_PERFIX}/sub/v1.2.0/`,
  cmdDeviceUrl: `${URL_PERFIX}/reg/v1.1.0/`,

}