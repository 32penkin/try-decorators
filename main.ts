import { log } from './src/log.decorator';








class Add {
  field: string = 'class Add';
  
  @log('Hello world')
  add(a: any, b: any) {
    return a + b;
  }
}

let a = new Add();

a.add(1, 2);
