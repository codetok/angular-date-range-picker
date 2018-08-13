import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDateRangeComponent } from './cdk-date-range.component';

describe('CdkDateRangeComponent', () => {
  let component: CdkDateRangeComponent;
  let fixture: ComponentFixture<CdkDateRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdkDateRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
