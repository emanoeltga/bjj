import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAtletaComponent } from './edit-atleta.component';

describe('EditarAtletaComponent', () => {
  let component: EditAtletaComponent;
  let fixture: ComponentFixture<EditAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditAtletaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
