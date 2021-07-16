import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataRestApiComponent } from './get-data-rest-api.component';

describe('GetDataRestApiComponent', () => {
  let component: GetDataRestApiComponent;
  let fixture: ComponentFixture<GetDataRestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDataRestApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
