import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintableCv } from './printable-cv';

describe('PrintableCv', () => {
  let component: PrintableCv;
  let fixture: ComponentFixture<PrintableCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintableCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintableCv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
