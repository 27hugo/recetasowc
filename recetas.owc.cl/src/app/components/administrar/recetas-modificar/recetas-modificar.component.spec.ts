import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasModificarComponent } from './recetas-modificar.component';

describe('RecetasModificarComponent', () => {
  let component: RecetasModificarComponent;
  let fixture: ComponentFixture<RecetasModificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetasModificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
