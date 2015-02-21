# modder
<b>modder</b> is get/set interface for sharing functions between modules and hooking custom behavior into modules that provide modder hooks. It lets you define an interface without implementing all the behavior at once or at all.

## API

### `modder(name?, value?)`

```js
// define some API and include a hook for overloading
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

## License
MIT