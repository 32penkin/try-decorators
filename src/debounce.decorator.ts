export function debounce(wait: number) {
  return function (target: any, key: any, func: any) {
    let state: any = null;
    enum StateType {
      STARTED,
      STOPPED
    }
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