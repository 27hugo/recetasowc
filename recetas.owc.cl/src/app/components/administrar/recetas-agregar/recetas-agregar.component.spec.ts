import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasAgregarComponent } from './recetas-agregar.component';

describe('RecetasAgregarComponent', () => {
  let component: RecetasAgregarComponent;
  let fixture: ComponentFixture<RecetasAgregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetasAgregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
