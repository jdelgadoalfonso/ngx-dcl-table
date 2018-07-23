import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';


@Directive({
  selector: '[appNgxDclTablePaging]'
})
export class NgxDclTablePagingDirective {
  @Output() public tableChanged = new EventEmitter<any>();
  @Input() public ngTablePaging = true;
  @Input() public get config(): boolean { return this.ngTablePaging; }
  public set config(value: boolean) { this.ngTablePaging = value; }

  constructor() { }

  @HostListener('click', ['$event'])
  public onChangePage(event: any): void {
    // Object.assign(this.config, event);
    if (this.ngTablePaging) {
      this.tableChanged.emit({ paging: event });
    }
  }
}
