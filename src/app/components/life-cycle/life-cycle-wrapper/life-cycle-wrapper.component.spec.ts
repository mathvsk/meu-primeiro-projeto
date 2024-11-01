import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleWrapperComponent } from './life-cycle-wrapper.component';

describe('LifeCycleWrapperComponent', () => {
  let component: LifeCycleWrapperComponent;
  let fixture: ComponentFixture<LifeCycleWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
