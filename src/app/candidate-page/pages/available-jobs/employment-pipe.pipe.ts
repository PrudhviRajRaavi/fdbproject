import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employmentPipe'
})
export class EmploymentPipePipe implements PipeTransform {

  transform(value: String): any {
    if(value=='F'){
      return "FullTime"
    }
    return value;
  }

}
