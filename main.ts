/**
 *
 * iobroker.yahka adapter
 *
 *
 *  file io-package.json comments:
 *
 *  {
 *      "common": {
 *          "name":         "iobroker.yahka",                  // name has to be set and has to be equal to adapters folder name and main file name excluding extension
 *          "version":      "0.0.0",                    // use "Semantic Versioning"! see http://semver.org/
 *          "title":        "Node.js iobroker.yahka Adapter",  // Adapter title shown in User Interfaces
 *          "authors":  [                               // Array of authord
 *              "name <mail@iobroker.yahka.com>"
 *          ]
 *          "desc":         "iobroker.yahka adapter",          // Adapter description shown in User Interfaces. Can be a language object {de:"...",ru:"..."} or a string
 *          "platform":     "Javascript/Node.js",       // possible values "javascript", "javascript/Node.js" - more coming
 *          "mode":         "daemon",                   // possible values "daemon", "schedule", "subscribe"
 *          "schedule":     "0 0 * * *"                 // cron-style schedule. Only needed if mode=schedule
 *          "loglevel":     "info"                      // Adapters Log Level
 *      },
 *      "native": {                                     // the native object is available via adapter.config in your adapters code - use it for configuration
 *          "test1": true,
 *          "test2": 42
 *      }
 *  }
 *
 */

/* jshint -W097 */// jshint strict:false
/*jslint node: true */
"use strict";

// you have to require the utils module and call adapter function
import utils = require("./lib/utils"); // Get common adapter utils
import * as hkAdapter from './yahka.ioBroker-adapter';

let yahkaAdapter = new hkAdapter.TIOBrokerAdapter(utils.adapter({name: 'yahka', systemConfig: true}), utils.controllerDir);



    // var adapter = utils.adapter({name: 'test'});
    // var test = new HAPBridge(adapter);

    // var x: ioBroker.ILogger;
    // //var x: utils.ioBroker.ILogger;
    // var uuid = HAP.uuid;
    // var Bridge = HAP.Bridge;
    // var Accessory = HAP.Accessory;
    // var Service = HAP.Service;
    // var Characteristic = HAP.Characteristic;
    // var bridge;    

    // /**
    //  *
    //  *      For every state in the system there has to be also an object of type state
    //  *
    //  *      Here a simple iobroker.yahka for a boolean variable named "testVariable"
    //  *
    //  *      Because every adapter instance uses its own unique namespace variable names can't collide with other adapters variables
    //  *
    //  */

    // adapter.setObject('testVariable', {
    //     type: 'state',
    //     common: {
    //         name: 'testVariable',
    //         type: 'boolean',
    //         role: 'indicator'
    //     },
    //     native: {}
    // });

    // // in this iobroker.yahka all states changes inside the adapters namespace are subscribed
    // adapter.subscribeStates('*');


    // /**
    //  *   setState examples
    //  *
    //  *   you will notice that each setState will cause the stateChange event to fire (because of above subscribeStates cmd)
    //  *
    //  */

    // // the variable testVariable is set to true as command (ack=false)
    // adapter.setState('testVariable', true);

    // // same thing, but the value is flagged "ack"
    // // ack should be always set to true if the value is received from or acknowledged from the target system
    // adapter.setState('testVariable', {val: true, ack: true});

    // // same thing, but the state is deleted after 30s (getState will return null afterwards)
    // adapter.setState('testVariable', {val: true, ack: true, expire: 30});



    // // examples for the checkPassword/checkGroup functions
    // adapter.checkPassword('admin', 'iobroker', function (res) {
    //     console.log('check user admin pw ioboker: ' + res);
    // });

    // adapter.checkGroup('admin', 'admin', function (res) {
    //     console.log('check group user admin group admin: ' + res);
    // });



