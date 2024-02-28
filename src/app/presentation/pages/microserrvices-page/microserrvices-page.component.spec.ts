import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroserrvicesPageComponent } from './microserrvices-page.component';

describe('MicroserrvicesPageComponent', () => {
  let component: MicroserrvicesPageComponent;
  let fixture: ComponentFixture<MicroserrvicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroserrvicesPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MicroserrvicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
