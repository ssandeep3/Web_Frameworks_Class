import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorComponent } from './indoor.component';

describe('IndoorComponent', () => {
  let component: IndoorComponent;
  let fixture: ComponentFixture<IndoorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndoorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
