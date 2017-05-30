export function cacheDecorator(target: any, key: any, desc: any) {
  const cache: any = {};
  return {
    value: function (...args: any[]) {
      const item = JSON.stringify(args);
      if(!(cache[item])){
        cache[item] = desc.value.apply(this, args);
        console.log('A function call with such parameters was not cached, but now it is in cache  |  Result: ' + desc.value.apply(this, args));
        return desc.value.apply(this, args);
      } else {
        console.log('A function call with such parameters was cached  |  Result: ' + cache[item]);
        return cache[item];
      }
    }
  }
}