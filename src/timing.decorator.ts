export function timingDecorator(target: any, key: any, desc: any) {
  return {
    value: function (...args: any[]) {
      const start = performance.now();
      const result = desc.value.apply(this, args);
      
      if(result.then) {
        return result.then(data => {
          logTime(start, data);
          return data;
        });
      } else {
        logTime(start, result);
        return result;
      }
    }
  }
}

function logTime(start: number, result: any) {
  const end = performance.now();
  console.log('Time of running function: ' + (end - start) + ' | Result: ' + result);
}