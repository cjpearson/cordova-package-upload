module.exports = function(context) {
	
	function printInfo() {
		console.log("Plugin installed correctly");
		console.log("This plugin requires deliver (https://github.com/fastlane/deliver)");
		console.log("Run `sudo gem install deliver` to install");
		console.log("Add --upload to cordova build to upload ipa to iTunes Connect");
	}
	
	var npm = context.requireCordovaModule('npm');

	npm.load(function(error) {
		if (error){
			console.log("Error loading npm");
		} else {
			npm.commands.install(__dirname, [], function (err){
				if (err) {
					console.log("Error installing plugin dependencies");
				} else {
					printInfo();
				}
			});
		}
	});
}