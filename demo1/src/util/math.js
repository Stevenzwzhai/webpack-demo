import log from './log';
export function add(...arg) {
    console.log('add')
    return arg.reduce((x, y) => x + y);
}
  
export function sub(...arg) {
    console.log(log('sub'));
    log('sub');
    return arg.reduce((x, y) => x - y);
}

function square(x) {
    Math.stdSquare = 1;
    return x * x;
}
export var stdSquare = square(1);