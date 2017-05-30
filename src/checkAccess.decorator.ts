export function checkAccess(func: any) {
  return function (target: any, key: any, desc: any) {
    return {
      value: function (...args: any[]) {
        if (func.apply(this)) {
          return desc.value.apply(this, args);
        } else {
          console.log('U do not have access');
        }
      }
    };
  }
}