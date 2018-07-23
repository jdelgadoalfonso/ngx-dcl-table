import { Directive, EventEmitter, Output, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgxDclTableSorting]'
})
export class NgxDclTableSortingDirective {
  @Input() public ngTableSorting: any;
  @Input() public column: any;

  @Output() public sortChanged = new EventEmitter<any>();

  constructor() { }

  @HostListener('click', ['$event'])
  onToggleSort(event: any) {
    if (event) {
      event.preventDefault();
    }

    if (this.ngTableSorting && this.column && this.column.sort !== false) {
      switch (this.column.sort) {
        case 'asc':
          this.column.sort = 'desc';
          break;
        case 'desc':
          this.column.sort = '';
          break;
        default:
          this.column.sort = 'asc';
          break;
      }

      this.sortChanged.emit(this.column);
    }
  }
}
