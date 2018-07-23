import {
  Directive, Output, Input, EventEmitter, ElementRef, Renderer, HostListener
} from '@angular/core';


@Directive({
  selector: '[appNgxDclTableFiltering]',
})
export class NgxDclTableFilteringDirective {
  @Input() public ngTableFiltering: any = {
    filterString: '',
    columnName: 'name'
  };

  @Output() public tableChanged = new EventEmitter<any>();

  constructor(private element: ElementRef, private renderer: Renderer) {
    // Set default value for filter
    this.renderer.setElementProperty(
      this.element, 'value', this.ngTableFiltering.filterString
    );
  }

  @HostListener('input', ['$event.target.value'])
  onChangeFilter(event: any) {
    this.ngTableFiltering.filterString = event;
    this.tableChanged.emit({ filtering: this.ngTableFiltering });
  }
}
