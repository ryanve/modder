!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make()
  else root[name] = make()
}(this, 'modder', function() {

  function create() {
    function modder(key, value) {
      var n = arguments.length
      if (!n) return create()
      if (2 != n) return modder['@' + key]
      return modder['@' + key] = value
    }
    return modder
  }

  return create()
});