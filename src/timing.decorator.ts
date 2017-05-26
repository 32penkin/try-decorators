export function timingDecorator(target: any, key: any, desc: any) {
  return {
    value: function (...args: any[]) {
      const start = new Date().getMilliseconds();
      const result = desc.value.apply(this, args);
      const end = new Date().getMilliseconds();
      
      console.log('Time of running function: ', end - start);
      return result;
    }
  }
}