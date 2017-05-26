export function checkAccess(func: () => boolean) {
  return function (target: any, key: any, desc: any) {
    return {
      value: function (...args: any[]) {
        if (func()) {
          return desc.value.apply(this, args);
        } else {
          console.log('U do not have access');
        }
      }
    };
  }
}