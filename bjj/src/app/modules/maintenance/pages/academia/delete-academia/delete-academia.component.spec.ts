import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAcademiaComponent } from './delete-academia.component';

describe('DeleteAcademiaComponent', () => {
  let component: DeleteAcademiaComponent;
  let fixture: ComponentFixture<DeleteAcademiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAcademiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
