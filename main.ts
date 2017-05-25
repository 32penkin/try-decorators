import { log } from './src/log.decorator';
import { checkAccess, isAdmin } from './src/checkAccess.decorator'
import { cacheDecorator } from './src/cache.decorator';





class Example {
  
  @cacheDecorator
  forFun(x: number) {
    return Math.random() * x;
  }
}

let ex1 = new Example();
ex1.forFun(1);

let a = ex1.forFun(1);
let b = ex1.forFun(1);


b = ex1.forFun(2);

console.log(a == b);





