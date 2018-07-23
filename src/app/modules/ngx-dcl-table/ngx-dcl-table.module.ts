import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DclModule } from 'ngx-dcl';

import { NgxDclTableComponent } from './ngx-dcl-table.component';
import { NgxDclTableFilteringDirective } from './directives/ngx-dcl-table-filtering.directive';
import { NgxDclTablePagingDirective } from './directives/ngx-dcl-table-paging.directive';
import { NgxDclTableSortingDirective } from './directives/ngx-dcl-table-sorting.directive';


@NgModule({
  imports: [
    CommonModule, DclModule
  ],
  declarations: [
    NgxDclTableComponent, NgxDclTableFilteringDirective,
    NgxDclTablePagingDirective, NgxDclTableSortingDirective
  ],
  exports: [
    NgxDclTableComponent, NgxDclTableFilteringDirective,
    NgxDclTablePagingDirective, NgxDclTableSortingDirective
  ],
  providers: [],
  entryComponents: [NgxDclTableComponent]
})
export class NgxDclTableModule { }
