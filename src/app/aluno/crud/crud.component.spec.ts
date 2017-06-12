import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAlunoComponent } from './crud.component';

describe('CrudAlunoComponent', () => {
  let component: CrudAlunoComponent;
  let fixture: ComponentFixture<CrudAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
