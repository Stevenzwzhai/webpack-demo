const math = {
    add: (...arg) => {
        console.log("add");
        return arg.reduce((x, y) => x + y);
    },
    sub: (...arg) => {
        console.log(log('sub'));
        return arg.reduce((x, y) => x - y);
    }
}
export default math;