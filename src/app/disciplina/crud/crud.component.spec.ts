import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDisciplinaComponent } from './crud.component';

describe('CrudDisciplinaComponent', () => {
  let component: CrudDisciplinaComponent;
  let fixture: ComponentFixture<CrudDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
