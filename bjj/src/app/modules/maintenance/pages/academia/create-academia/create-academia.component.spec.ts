import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcademiaComponent } from './create-academia.component';

describe('CreateAcademiaComponent', () => {
  let component: CreateAcademiaComponent;
  let fixture: ComponentFixture<CreateAcademiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateAcademiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
