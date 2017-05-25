export function cacheDecorator(target: any, key: any, func: any) {
  let cache: any = {};
  return {
    value: function (x: number) {
      if(!(x in cache)){
        cache[x] = func.value.call(this, x);
      } else {
        return cache[x];
      }
    }
  }
}