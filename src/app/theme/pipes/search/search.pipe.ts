import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'SearchPipe' })
export class SearchPipe implements PipeTransform {
  transform(value, args?): Array<any> {
    let searchText = new RegExp(args, 'ig');
    if (value) {
      return value.filter(file => {
        if (file.email) {
          return file.email.search(searchText) !== -1;
        } else if (file.UserName) {
          return file.UserName.search(searchText) !== -1;
        } else if (file.ProductName) {
          return file.ProductName.search(searchText) !== -1;
        }
      });
    }
  }
}
