export function debounce(wait: number) {
  return function (target: any, key: any, func: any) {
    let state: any = null;
    
    return {
      value: function () {
        if(state === StateType.STARTED) return;
        
        func.value.apply(this, arguments);
        state = StateType.STARTED;
        setTimeout(() => {state = StateType.STOPPED}, wait);
      }
    };
  }
}

enum StateType {
  STARTED,
  STOPPED
}