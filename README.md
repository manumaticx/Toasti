# Toasty

Alloy Widget for cross-platform Toast notifications.

![toasty](http://i40.tinypic.com/2ut1102.png)

## Install

### Download

#### as Archive
* [download](https://github.com/manumaticx/toasty/releases) latest version as zip
* unzip under `app/widgets/toasty`
	
#### as Git Submodule

`$ git submodule add https://github.com/manumaticx/toasty.git app/widgets/toasty`

### update config.json

```javascript
"dependencies": {
    "toasty":"1.1"
}
```

## Usage

Create an instance of the widget ( global reference is recommeded: `Alloy.Globals.toasty` )
```javascript
var toasty = Alloy.createWidget("toasty");
```

Show a simple toast message
```javascript
toasty.show("Hello World");
```

Use a title and type
```javascript
toasty.show({
   title: 'Confirm',
   message: 'This is a confirmation.',
   type: 'confirm' // or: toasty.TYPE_CONFIRM
});
```

### Properties
* `TYPE_CONFIRM`
* `TYPE_ALERT`
* `TYPE_INFO`

### Methods
* `show( properties )`

	* _properties_ is an Object with these keys:
		* title
		* message
		* type
		* duration
		* opacity
	* you can pass a String instead of an Object
	* __returns__ a reference to the toasty (Ti.UI.Window)


## Changelog

* __1.1__ 
	* changed the API (create widget once, show multiple messages)
	* queues up messages
* __1.0__ 
	* initial release

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
