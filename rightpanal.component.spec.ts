import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightpanalComponent } from './rightpanal.component';

describe('RightpanalComponent', () => {
  let component: RightpanalComponent;
  let fixture: ComponentFixture<RightpanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightpanalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightpanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
