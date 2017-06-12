import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheDisciplinaComponent } from './detalhe.component';

describe('DetalheComponent', () => {
  let component: DetalheDisciplinaComponent;
  let fixture: ComponentFixture<DetalheDisciplinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheDisciplinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
