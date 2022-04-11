const env = require('../utils/env')

module.exports = {
  HOST_NAME: env('HOST_NAME', '127.0.0.1'),
  HOST_PORT: env('HOST_PORT', '8080'),
  MODULE_NAME: env('MODULE_NAME', 'Melita IO'),
  EGRESS_URL: env('EGRESS_URL', ''),
  EXECUTE_SINGLE_COMMAND: env('EXECUTE_SINGLE_COMMAND', 'no'),
  SINGLE_COMMAND: env('SINGLE_COMMAND', 'addDownlinkDeviceQueue'),
  AUTHENTICATION_API_KEY: env('AUTHENTICATION_API_KEY', 'fa698295c740f81b3eb238569d2b9123'),
  ERROR_URL: env('ERROR_URL', ''),
  MELITA_API_URL: env('MELITA_API_URL', 'https://www.melita.io/api/iot-gateway/lorawan/'),
}
