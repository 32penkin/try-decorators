export function timingDecorator(target: any, key: any, func: any) {
  return {
    value: function (...args: any[]) {
      const start = new Date().getMilliseconds();
      const result = func.value.apply(this, args);
      const end = new Date().getMilliseconds();
      
      console.log('Time of running function: ', end - start);
      return result;
    }
  }
}