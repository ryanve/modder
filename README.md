# modder
<b>modder</b> is get/set interface for sharing functions and hooking custom behavior into JavaScript modules that provide hooks to do so. It lets you define an interface without implementing all the behavior at once or at all.

```
npm install modder --save
```

## API

### `modder(name?, value?)`
- `modder(name)` get
- `modder(name, value)` set

#### example

```js
// define some API and provide a hook for overloading
var api = {
  riot: function(size) {
    if (size > 1000) require('modder')('evacuate').call(this)
    else this.chill()
  }
  chill: function() {
  }
}

// implement behavior later
var modder = require('modder')
modder('evacuate', function() {
  // follow evacuation procedure
})
```

#### instances

If you need multiple `modder` instances:

```js
var modder1 = modder()
var modder2 = modder()
```

## License
MIT
