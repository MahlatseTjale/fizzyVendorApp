import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountLoadedComponent } from './amount-loaded.component';

describe('AmountLoadedComponent', () => {
  let component: AmountLoadedComponent;
  let fixture: ComponentFixture<AmountLoadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountLoadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
