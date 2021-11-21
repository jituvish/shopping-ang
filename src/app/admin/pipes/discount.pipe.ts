import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(a, b, c){
    if(c<=25){
      if(b=="male")
      {
        let x = a*15/100;
        return x;
      }
      if(b=="female")
      {
        let x = a*20/100;
        return x;
      } 
    }
    if(c> 25){
      if(b=="male")
      {
        let x = a*10/100;
        return x;
      }
      if(b=="female")
      {
        let x = a*15/100;
        return x;
      }

    }

  }

}
