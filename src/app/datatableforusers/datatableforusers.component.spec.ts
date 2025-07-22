import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableforusersComponent } from './datatableforusers.component';

describe('DatatableforusersComponent', () => {
  let component: DatatableforusersComponent;
  let fixture: ComponentFixture<DatatableforusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatatableforusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableforusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
