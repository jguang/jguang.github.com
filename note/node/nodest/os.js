/**
 * Created by jianguang on 16/4/25.
 */

var os = require('os');


function log() {
    console.log.apply(console, arguments);
}

log(os.hostname());

/*
log(os.arch());

log(os.cpus());

log(os.freemem());

log(os.hostname());

log(os.tmpDir());

log(os.networkInterfaces());*/
