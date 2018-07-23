import { NgxDclTableModule } from './ngx-dcl-table.module';

describe('NgxDclTableModule', () => {
  let ngxDclTableModule: NgxDclTableModule;

  beforeEach(() => {
    ngxDclTableModule = new NgxDclTableModule();
  });

  it('should create an instance', () => {
    expect(ngxDclTableModule).toBeTruthy();
  });
});
