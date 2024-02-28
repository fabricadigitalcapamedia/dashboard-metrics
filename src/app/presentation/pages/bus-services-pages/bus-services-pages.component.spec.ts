import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusServicesPagesComponent } from './bus-services-pages.component';

describe('BusServicesPagesComponent', () => {
  let component: BusServicesPagesComponent;
  let fixture: ComponentFixture<BusServicesPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusServicesPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusServicesPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
