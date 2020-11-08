import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshAppComponent } from './refresh-app.component';

describe('RefreshAppComponent', () => {
  let component: RefreshAppComponent;
  let fixture: ComponentFixture<RefreshAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
