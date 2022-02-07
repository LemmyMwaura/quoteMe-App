import { getLocaleTimeFormat } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timepipe',
})
export class TimepipePipe implements PipeTransform {
  gettime() {
    return new Date();
  }

  transform(value: any): any {
    if (value) {
      let time: any = this.gettime();
      let diff = Math.abs(time - value);
      let diffInsec = diff * 0.001;
      return diffInsec.toFixed(3);
    }
  }
}
