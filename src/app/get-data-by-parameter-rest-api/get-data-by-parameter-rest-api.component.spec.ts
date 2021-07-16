import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataByParameterRestApiComponent } from './get-data-by-parameter-rest-api.component';

describe('GetDataByParameterRestApiComponent', () => {
  let component: GetDataByParameterRestApiComponent;
  let fixture: ComponentFixture<GetDataByParameterRestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDataByParameterRestApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDataByParameterRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
