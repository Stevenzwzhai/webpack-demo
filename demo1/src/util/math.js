import log from './math3';
export function add(...arg) {
    console.log('add')
    return arg.reduce((x, y) => x + y);
}
  
export function sub(...arg) {
    console.log('sub')
    console.log(log('sub'));
    return arg.reduce((x, y) => x - y);
}