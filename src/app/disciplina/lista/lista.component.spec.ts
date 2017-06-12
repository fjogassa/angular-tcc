import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDisciplinaComponent } from './lista.component';

describe('ListaComponent', () => {
  let component: ListaDisciplinaComponent;
  let fixture: ComponentFixture<ListaDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
