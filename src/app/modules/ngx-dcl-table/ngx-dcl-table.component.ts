import {
  Component, Input, Output, EventEmitter, OnChanges, SimpleChanges
} from '@angular/core';


@Component({
  selector: 'app-ngx-dcl-table',
  templateUrl: './ngx-dcl-table.component.html',
  styleUrls: ['./ngx-dcl-table.component.css']
})
export class NgxDclTableComponent implements OnChanges {
  // Table values
  @Input() public rows: Array<any> = [ ];
  @Input() public config: any = { };
  @Input() public id = 'id';
  @Input() public cSelectAll: any = { };
  @Input() public setResponsive = false;
  @Input() public summary: string;

  @Output() public tableChanged = new EventEmitter<any>();

  private _columns: Array<any> = [ ];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const value = 'columns';
    if (changes[value]) {
      this._columns = changes[value].currentValue;
    }
  }

  @Input() public get columns() { return this._columns; }
  public set columns(values: Array<any>) {
    values.forEach(value => {
      const column = this._columns.find(col => col.name === value.name);
      if (column) {
        Object.assign(column, value);
      } else {
        this._columns.push(value);
      }
    });
  }

  public get configColumns() {
    const sortColumns: Array<any> = [ ];

    this.columns.forEach((column) => {
      if (column.sort) {
        sortColumns.push(column);
      }
    });

    return {columns: sortColumns};
  }

  onChangeTable(column: any) {
    this._columns.forEach(col => {
      if (col.name !== column.name && col.sort !== false) {
        col.sort = '';
      }
    });
    this.tableChanged.emit({sorting: this.configColumns});
  }
}
