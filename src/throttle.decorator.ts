export function throttle(wait: number) {
  return function (target: any, key: any, decs: any) {
    let isThrottled = false;
    let argsForSave: any;
    let that: any;
    
    return {
      value: function dec(...args: any[]) {
        if(isThrottled) {
          argsForSave = args;
          that = this;
          return;
        }
  
        decs.value.apply(this, args);
        isThrottled = true;
  
        setTimeout(() => {
          isThrottled = false;
          
          if(args) {
            dec.apply(that, args);
            argsForSave = null;
            that = null;
          }
        }, wait);
      }
    };
  }
}