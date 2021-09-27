import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBindingsComponent } from './angular-bindings.component';

describe('AngularBindingsComponent', () => {
  let component: AngularBindingsComponent;
  let fixture: ComponentFixture<AngularBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularBindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
