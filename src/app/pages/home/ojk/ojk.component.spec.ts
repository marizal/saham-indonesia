import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OjkComponent } from './ojk.component';

describe('OjkComponent', () => {
  let component: OjkComponent;
  let fixture: ComponentFixture<OjkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OjkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OjkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
