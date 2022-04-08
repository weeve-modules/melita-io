# Melita IO

|                |                            |
| -------------- | -------------------------- |
| Name           | Melita IO                  |
| Version        | v1.0.0                     |
| Dockerhub Link | [weevenetwork/melita-io]() |
| Authors        | Mesud Pasic                |

- [MQTT Ingress](#melita-io)
  - [Description](#description)
  - [Features](#features)
  - [Environment Variables](#environment-variables)
    - [Module Specific](#module-specific)
    - [Set by the weeve Agent on the edge-node](#set-by-the-weeve-agent-on-the-edge-node)
  - [Dependencies](#dependencies)

## Description

Melita.IO API module.

## Features

- Parsing Melita.io data for thermostat
- Sends data to next module service via REST API

## Environment Variables

- HOST_NAME
- HOST_PORT
- EGRESS_URL
- EXECUTE_SINGLE_COMMAND
- SINGLE_COMMAND

### Module Specific

### Set by the weeve Agent on the edge-node

| Environment Variables | type | Description |
| --- | --- | --- |
| MODULE_NAME | string | Name of the module |
| HOST_NAME | string | Host where app is running |
| HOST_PORT | string | Port where app is running |
| EGRESS_URL | string | URL for passing the result output to next module |
| EXECUTE_SINGLE_COMMAND | string | yes/no to specify if module supports only executing single command |
| SINGLE_COMMAND | string | if EXECUTE_SINGLE_COMMAND=no, then users will have to provide in request "command" parameter with command name |
| MELITA_API_URL | string | Melita.io API URL |
| AUTHENTICATION_API_KEY | string | API key for authentication |
| ERROR_URL | string | URL for passing errors during request to melita.io API |

## Available custom commands

- createDevice
- getDevices
- getProfiles
- createProfile
- getDeviceProfile
- createContractUrl
- deleteContractUrl
- updateDeviceLabel
- getContractDevice
- updateDeviceProfile
- removeDevice
- getDeviceApiKey
- getDeviceQueue
- addDownlinkDeviceQueue
- flushDeviceQueue
- suspendResumeDevice
- getDeviceUsage

## Dependencies

```js
"dependencies": {
    "body-parser": "^1.19.2",
    "express": "^4.17.3",
    "express-winston": "^4.2.0",
    "node-fetch": "^2.6.1",
    "winston": "^3.6.0"
}
```
