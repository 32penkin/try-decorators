export function debounce(wait: number) {
  return function (target: any, key: any, func: any) {
    let state: any = null;
    
    return {
      value: function (...args: any[]) {
        if(state === StateType.STARTED) return;
        
        func.value.apply(this, args);
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