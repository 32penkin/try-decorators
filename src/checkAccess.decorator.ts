export function checkAccess(val: boolean) {
  return function (target: any, key: any, func: any) {
    return {
      value: function () {
        if(val){
          return func.value.call(this, val);
        } else {
          console.log('U do not have access');
        }
      }
    };
  }
}