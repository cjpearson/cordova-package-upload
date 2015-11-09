# cordova-package-upload 

A Cordova plugin for uploading builds to the app store.

## Installation

This plugin can be installed from Github

```sh
cordova plugin add https://github.com/cjpearson/cordova-package-upload --save
```

It also requires the [Deliver tool](https://github.com/fastlane/deliver)

```sh
sudo gem install deliver
```

## Quick Start

To upload a build add --upload to the cordova build command.

```sh
cordova build ios --device --release --upload
```

Builds also must target a device and use a distribution provisioning profile.

## License

MIT