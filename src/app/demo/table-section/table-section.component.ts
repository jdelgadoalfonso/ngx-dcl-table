import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-section',
  templateUrl: './table-section.component.html',
  styleUrls: ['./table-section.component.css']
})
export class TableSectionComponent implements OnInit {
  public name: string = name;
  public summary = '';
  public src = '';
  public titleDoc = '';
  public doc = '';

  constructor() { }

  ngOnInit() {
  }

}
