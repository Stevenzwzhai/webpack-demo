exports.add2 =  function add2(...arg) {
    return arg.reduce((x, y) => x + y);
}
  
exports.sub2 =  function sub2(...arg) {
    return arg.reduce((x, y) => x - y);
}