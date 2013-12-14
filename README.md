# Toasty

Alloy Widget for cross-platform Toast notifications.

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
    "toasty":"1.2"
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

You can find a more detailed documentation in the [wiki](https://github.com/manumaticx/toasty/wiki)

#### [Changelog](https://github.com/manumaticx/toasty/wiki/Changelog)

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
