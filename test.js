!function(root) {
  var common = typeof module != 'undefined' && !!module.exports
  var modder = common ? require('./') : root.modder

  function ok(correct, actual, message) {
    if (correct !== actual) throw new Error(message)
    else console.info('Ok:', message)
  }

  function f1() { return 1 }
  function f2() { return 2 }

  var m1 = modder()
  var m2 = modder()

  ok(m1 === m2, false, 'each modder should be its own instance')
  ok(m1(1, f1), f1, 'setting should return value')
  ok(m1(1), f1, 'getting should get value')
  ok(m2(1, f2), f2, 'setting other instance should work too')
  ok(m1(1), f1, 'instances should not affect each other')
  ok(m1(1, null), null, 'nulling should work')
  ok(m1(1, 1), 1, 'value can be any type')
  ok(m1(1), m1('1'), 'key can be string or number')
  ok(m1('unset'), undefined, 'should return undefined for unset keys')
  ok(m1('valueOf'), undefined, 'should not get prototype properties')

  console.log('All tests passed =)')
  console.dir && console.dir(modder)
}(this);
