export function cacheDecorator(target: any, key: any, func: any) {
  let cache: any = {};
  return {
    value: function (...args: any[]) {
      args.forEach(item => {
        if(!(item in cache)){
          cache[item] = func.value.call(this, item);
        } else {
          return cache[item];
        }
      });
    }
  }
}