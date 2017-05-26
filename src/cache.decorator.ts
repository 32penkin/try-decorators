export function cacheDecorator(target: any, key: any, desc: any) {
  const cache: any = {};
  return {
    value: function (...args: any[]) {
      const item = JSON.stringify(args);
        if(!(item in cache)){
          cache[item] = desc.value.call(this, item);
        } else {
          return cache[item];
        }
    }
  }
}