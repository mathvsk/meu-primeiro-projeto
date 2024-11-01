import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaComParametroComponent } from './rota-com-parametro.component';

describe('RotaComParametroComponent', () => {
  let component: RotaComParametroComponent;
  let fixture: ComponentFixture<RotaComParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotaComParametroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotaComParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
