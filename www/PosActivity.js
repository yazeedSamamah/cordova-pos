/*var exec = require('cordova/exec');

function plugin() {

}

plugin.prototype.new_activity = function() {
    exec(function(res){}, function(err){}, "PosActivity", "new_activity", []);
}

module.exports = new plugin();*/
var exec = require('cordova/exec');

exports.new_activity = function( str, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'PosActivity', 'new_activity', []);
};
