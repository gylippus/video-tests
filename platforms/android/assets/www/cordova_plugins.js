cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.flyingsoftgames.xapkreader": "0.9.0",
    "com.ionic.keyboard": "1.0.4",
    "org.apache.cordova.console": "0.2.13"
}
// BOTTOM OF METADATA
});