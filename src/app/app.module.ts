import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  ComponentLoaderFactory, PaginationModule, BsDropdownModule, BsDropdownConfig,
  PositioningService
} from 'ngx-bootstrap';

import { NgxDclTableModule } from './modules/ngx-dcl-table/ngx-dcl-table.module';

import { AppComponent } from './app.component';
import { TableDemoComponent } from './demo/table-demo/table-demo.component';
import { EditableComponent } from './demo/editable/editable.component';
import { ButtonsComponent } from './demo/buttons/buttons.component';
import { TableSectionComponent } from './demo/table-section/table-section.component';


@NgModule({
  declarations: [
    AppComponent,
    TableDemoComponent,
    EditableComponent,
    ButtonsComponent,
    TableSectionComponent
  ],
  imports: [
    BrowserModule, FormsModule, PaginationModule.forRoot(), NgxDclTableModule,
    BsDropdownModule
  ],
  entryComponents: [EditableComponent, ButtonsComponent],
  providers: [ComponentLoaderFactory, PositioningService, BsDropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
