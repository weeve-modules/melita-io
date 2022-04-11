/*
Decoder documentation:
https://www.melita.io/api-documentation/
*/

const { MELITA_API_URL, AUTHENTICATION_API_KEY } = require('../config/config')
const qs = require('querystring')
const fetch = require('node-fetch')

const getAuthToken = async () => {
  let res = fetch(MELITA_API_URL, {
    method: 'POST',
    headers: {
      ApiKey: AUTHENTICATION_API_KEY,
    },
  })
  if (res.ok) {
    let json = await res.json()
    return json.authToken
  } else return false
}
/*
createDevice	device	post
getDevices	devices	get
getProfiles	profiles	get
createProfile	profiles	post
getDeviceProfile	profiles/:profileId	get
createContractUrl	url/:contractId	post
deleteContractUrl	url/contractId	delete
updateDeviceLabel	:deviceEUI/:label	put
getContractDevice	:deviceEUI	get
updateDeviceProfile	:deviceEUI	put
removeDevice	:deviceEUI	delete
getDeviceApiKey	/:deviceEUI/appKey	get
getDeviceQueue	/:deviceEUI/queue	get
addDownlinkDeviceQueue	/:deviceEUI/queue	post
flushDeviceQueue	/:deviceEUI/queue	delete
suspendResumeDevice	/:deviceEUI/status	post
getDeviceUsage	/:deviceEUI/usage	get

*/
const processCommand = async json => {
  const authToken = await getAuthToken()
  if (authToken === false) return false
  // device not specified
  let method = null
  let path = null
  let command = json.data.command.name
  let params = json.data.command.params
  switch (command) {
    case 'createDevice':
      method = 'POST'
      path = '/device'
      break
    case 'getDevices':
      method = 'GET'
      path = '/devices'
      break
    case 'getProfiles':
      method = 'GET'
      path = '/profiles'
      break
    case 'createProfile':
      method = 'POST'
      path = '/profiles'
      break
    case 'getDeviceProfile':
      method = 'GET'
      path = `/profiles/${params.profileId}`
      break
    case 'createContractUrl':
      method = 'POST'
      path = `/url/${params.contractId}`
      break
    case 'deleteContractUrl':
      method = 'DELETE'
      path = `/url/${params.contractId}`
      break
    case 'updateDeviceLabel':
      method = 'PUT'
      path = `/${params.deviceEUI}/${params.label}`
      break
    case 'getContractDevice':
      method = 'GET'
      path = `/${params.deviceEUI}`
      break
    case 'updateDeviceProfile':
      method = 'PUT'
      path = `/${params.deviceEUI}`
      break
    case 'removeDevice':
      method = 'DELETE'
      path = `/${params.deviceEUI}`
      break
    case 'getDeviceApiKey':
      method = 'GET'
      path = `/${params.deviceEUI}/appKey`
      break
    case 'getDeviceQueue':
      method = 'GET'
      path = `/${params.deviceEUI}/queue`
      break
    case 'addDownlinkDeviceQueue':
      method = 'POST'
      path = `/${params.deviceEUI}/queue`
      break
    case 'flushDeviceQueue':
      method = 'DELETE'
      path = `/${params.deviceEUI}/queue`
      break
    case 'suspendResumeDevice':
      method = 'POST'
      path = `/${params.deviceEUI}/status`
      break
    case 'getDeviceUsage':
      method = 'GET'
      path = `/${params.deviceEUI}/usage`
      break
  }
  if (method === null) return false
  let q_params = ''
  if (method === 'GET') q_params = `?${qs.stringify(params)}`
  let res = fetch(`${MELITA_API_URL}${path}${q_params}`, {
    method: method,
    headers: {
      Authorization: `Bearer ${authToken}`,
      accept: 'application/json',
    },
    body: method !== 'GET' ? JSON.stringify(params) : '',
  })
  if (res.ok) {
    return await res.json()
  } else {
    return {
      status: false,
      message: 'Invalid request data.',
    }
  }
}
module.exports = {
  getAuthToken,
  processCommand,
}
