var async    = require('async'),
    npm      = require('npm'),
    npmi     = require('npmi'),
    path     = require('path'),
    fs       = require('fs'),
    extend   = require('extend');

exports = module.exports = NpmInstallFrom;

function NpmInstallFrom(options) {
    options = options || {};
    var opts = {
        path: '.',
        cleanup: true,
        forceInstall: true
    };
    extend(true, opts, options);
    this.options = opts;
}

NpmInstallFrom.prototype.getMissing = function (cb) {
    npm.load({
        prefix: path.resolve(this.options.path)
    }, function (err) {
        if (err) throw err;
        npm.commands.outdated(function (err, data) {
            if (err) throw err;
            var missing_modules = [];
            data.forEach(function (module) {
                if (module[ 2 ] === undefined)
                    missing_modules.push([ module[ 1 ], module[ 3 ] ]);
            });
            cb(missing_modules);
        });
    });
};

NpmInstallFrom.prototype.installModule = function (module, cb) {
    var options = {
        name: module[ 0 ],
        version: module[ 1 ],
        path: '.',
        forceInstall: this.options.forceInstall,
        npmLoad: {
            loglevel: 'silent'
        }
    };
    npmi(options, function (err, result) {
        if (err) {
            if (err.code === npmi.LOAD_ERR)    console.log('npm load error');
            else if (err.code === npmi.INSTALL_ERR) console.log('npm install error');
            console.log(err.message);
            throw err;
        }

        // installed
        console.log(options.name + '@' + options.version + ' installed successfully in ' + path.resolve(options.path));
        cb(err, module);
    });
};

NpmInstallFrom.prototype.init = function (cb) {
    var msg = [];
    var inst = this;
    this.getMissing(function (data) {
        if (data.length > 0) {
            async.map(data, inst.installModule.bind(inst), function (err, result) {
                result.forEach(function (module) {
                    msg.push(module[ 0 ] + "@" + module[ 1 ]);
                });
                return cb("Successfully installed: " + msg.join(', '));
            });
        } else {
            cb('Nothing to install.');
        }
        if (inst.options.cleanup === true) {
            inst.cleanup();
        }
    });
};

NpmInstallFrom.prototype.cleanup = function () {
    try {
        fs.rmdir(path.resolve(this.options.path, 'etc'));
    } catch (err) {
    }
};