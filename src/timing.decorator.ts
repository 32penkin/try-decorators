export function timingDecorator(target: any, key: any, desc: any) {
  return {
    value: function (...args: any[]) {

      const start = performance.now();
      const result = desc.value.apply(this, args);
      const end = performance.now();
      
      console.log('Time of running function: ' + (end - start) + ' | Result: ' + result);
      return result;
    }
  }
}