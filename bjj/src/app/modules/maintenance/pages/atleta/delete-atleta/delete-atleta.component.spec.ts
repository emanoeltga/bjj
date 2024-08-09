import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAtletaComponent } from './delete-atleta.component';

describe('DeleteAtletaComponent', () => {
  let component: DeleteAtletaComponent;
  let fixture: ComponentFixture<DeleteAtletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteAtletaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteAtletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
