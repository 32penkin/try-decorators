export function isAdmin(par: boolean) {
  return par;
}

export function checkAccess(target: any, key: any, func: any) {
  return {
    value: function (arg: boolean) {
      if(isAdmin(arg)){
        return func.value.apply(this, arg);
      } else {
        console.log('U do not have access');
      }
    }
  }
}