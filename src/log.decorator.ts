export function log(message: string) {
  return function (target: any, key: any, func: any) {
    return {
      value: function (...args: any[]) {
        console.log('Arguments: ', args);
        console.log('Result: ', func.value.apply(this, args));
        console.log('Message: ' + message);
      }
    };
  }
}