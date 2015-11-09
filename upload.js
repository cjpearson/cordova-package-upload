module.exports = function(context) {
    var nopt = require('nopt'),
        path = require("path"),
        spawn = require('child_process').spawn,
        glob = require("glob");

    var args = nopt({"upload": Boolean, "release": Boolean}, null, context.cmdLine.split(' '), 0);
    
    if (args.upload && args.release){
        // Upload iOS to iTunes Connect
        //TODO: Metadata. 
        //One option is to turn off the --skip-metadata flag and use deliver's metadata file format
        //But that won't help for android
        if(context.opts.platforms.indexOf("ios") != -1){
            var ipaLocation = glob.sync(path.join(context.opts.projectRoot, "platforms", "ios", "build", "device", "*.ipa"));
            var child = spawn("deliver", ["--ipa", ipaLocation, "--skip_screenshots", "--skip_metadata"]); //Add force flag?
            child.stdout.pipe(process.stdout);
            process.stdin.pipe(child.stdin);
        }
    }
}
