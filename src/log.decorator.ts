export function log(message: string) {
  return function (target: any, key: any, desc: any) {
    return {
      value: function (...args: any[]) {
        console.log('Arguments: ' + args + ' | ' + 'Result: ' + desc.value.apply(this, args) + ' | ' + 'Message: ' + message);
        // console.log('Result: ', desc.value.apply(this, args));
        // console.log('Message: ' + message);
      }
    };
  }
}