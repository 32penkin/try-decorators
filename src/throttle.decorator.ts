export function throttle(wait: number) {
  return function (target: any, key: any, func: any) {
    let isThrottled = false;
    let args: any;
    let that: any;
    
    return {
      value: function dec() {
        if(isThrottled) {
          args = arguments;
          that = this;
          return;
        }
  
        func.value.apply(this, arguments);
        isThrottled = true;
  
        setTimeout(() => {
          isThrottled = false;
          
          if(args) {
            dec.apply(that, args);
            args = null;
            that = null;
          }
        }, wait);
      }
    };
  }
}