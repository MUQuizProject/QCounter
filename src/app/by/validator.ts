import { FormControl } from '@angular/forms';

export function configValidator(control: FormControl): { [s:string]: boolean } {
  if(!control.value.match(/^(0|[1-9]\d*)/)) {
    return {notInteger: true};
  }
}
