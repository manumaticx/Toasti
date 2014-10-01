# Toasti [![Appcelerator Titanium](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/)

> IMPORTANT:

> This project is not longer maintained. Only iOS is supported.

> Alternative choices:

> * [nl.fokkezb.toast](http://gitt.io/component/nl.fokkezb.toast)
> * [com.mcongrove.toast](http://gitt.io/component/com.mcongrove.toast)
> * [com.caffeinalab.titanium.notifications](http://gitt.io/component/com.caffeinalab.titanium.notifications)

Alloy Widget for enhanced Toast notifications for iOS.

![demo](http://s27.postimg.org/my6zqbpwj/demo.gif)

## Features
* different types (backgroundColor): default, confirm, alert, info
* multiple animations: fade, slide from top, slide from left, zoom in/out
* queues up messages
* very customizable: dimension, position, custom content view, etc.

## Quick Start

### Installation [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/toasty)
Download the latest distribution ZIP-file and consult the [Titanium Documentation](http://docs.appcelerator.com/titanium/latest/#!/guide/Using_a_Module) on how install it, or simply use the [gitTio CLI](http://gitt.io/cli):

`$ gittio install toasty`

### Usage


Create an instance of the widget ( global reference is recommeded: `Alloy.Globals.toasty` )
```javascript
var toasty = Alloy.createWidget("toasty");
```

Show a simple toast message
```javascript
toasty.show("Hello World");
```

## More
* [Documentation](https://github.com/manumaticx/toasti/wiki)
* [Changelog](https://github.com/manumaticx/toasti/wiki/Changelog)

## License

<pre>
Copyright 2013 Manuel Lehner

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
</pre>
