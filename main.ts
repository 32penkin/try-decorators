import { log } from './src/log.decorator';
import { checkAccess, isAdmin } from './src/checkAccess.decorator'
import { cacheDecorator } from './src/cache.decorator';
import { debounce } from './src/debounce.decorator';
import { timingDecorator } from './src/timing.decorator';
import { throttle } from './src/throttle.decorator';


class ForCheck {
  @debounce(1000)
  method(x: any) {
    console.log(x);
  }
  
  @throttle(1000)
  method2 (x: any) {
  console.log(x);
}
}

const fc1 = new ForCheck();

// setTimeout( function() { fc1.method(3) }, 100);
// setTimeout( function() { fc1.method(4) }, 1100);
// setTimeout( function() { fc1.method(5) }, 1500);

fc1.method2('first');
fc1.method2('lalala');
fc1.method2('lalalalalaala');
fc1.method2('second');
fc1.method2('third');