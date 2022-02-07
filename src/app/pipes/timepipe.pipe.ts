import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepipe'
})
export class TimepipePipe implements PipeTransform {
  transform(value: any): any {
    if(value){
      let time:any = new Date()
      let diff = Math.abs(time - value)
      let diffInsec = diff*0.001

      console.log(value)
      console.log(time)
      console.log(diff)
      console.log(diffInsec)

      return diffInsec.toFixed(3)
    }
  }
}