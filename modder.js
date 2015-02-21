/*!
 * modder 0.1.0+201502211040
 * https://github.com/ryanve/modder
 * MIT License (c) 2015 Ryan Van Etten
 */
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