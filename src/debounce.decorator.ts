export function debounce(wait: number) {
  return function (target: any, key: any, func: any) {
    let state: any = null;
    let Cooling = 1;
    return {
      value: function () {
        if(state) return;
        
        func.value.apply(this, arguments);
        state = Cooling;
        setTimeout(() => {state = null}, wait);
      }
    };
  }
}