import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitCamelCase',
  // standalone: true
})
export class SplitCamelCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    // Insert spaces before uppercase letters
    let result = value.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Capitalize the first letter of each word
    result = result.replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });

    return result;
  }

}
