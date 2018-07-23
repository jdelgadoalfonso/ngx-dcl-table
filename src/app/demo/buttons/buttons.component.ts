import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() edit = new EventEmitter<any>();
  @Output() ok = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  private _editMode = false;

  public get editMode(): boolean { return this._editMode; }

  constructor() { }

  ngOnInit() { }
}
