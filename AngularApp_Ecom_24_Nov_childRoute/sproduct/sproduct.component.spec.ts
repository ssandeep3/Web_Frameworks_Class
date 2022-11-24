import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SproductComponent } from './sproduct.component';

describe('SproductComponent', () => {
  let component: SproductComponent;
  let fixture: ComponentFixture<SproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
