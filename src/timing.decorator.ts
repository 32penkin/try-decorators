export function timingDecorator(timer: string) {
  return function (target: any, key: any, func: any) {
    let timers: any = {};
    return {
      value: function () {
        let start = new Date().getMilliseconds();
        
        let result = func.value.apply(this, arguments);
        if(!(timer in timers)) timers[timer] = 0;
        timers[timer] += new Date().getMilliseconds() - start;
        console.log(timers.timer);
        return result;
      }
    };
  }
}